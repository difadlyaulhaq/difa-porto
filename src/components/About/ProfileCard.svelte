<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import './ProfileCard.css';

  export let avatarUrl = '';
  export let iconUrl = '';
  export let grainUrl = '';
  export let innerGradient = 'linear-gradient(145deg, rgba(34, 211, 238, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)';
  export let behindGlowEnabled = true;
  export let behindGlowColor = 'rgba(34, 211, 238, 0.4)';
  export let behindGlowSize = '50%';
  export let className = '';
  export let enableTilt = true;
  export let enableMobileTilt = false;
  export let mobileTiltSensitivity = 5;
  export let miniAvatarUrl = '';
  export let name = 'Javi A. Torres';
  export let title = 'Software Engineer';
  export let handle = 'javicodes';
  export let status = 'Online';
  export let contactText = 'Contact';
  export let showUserInfo = true;
  export let onContactClick: (() => void) | undefined = undefined;

  let wrapRef: HTMLDivElement;
  let shellRef: HTMLDivElement;

  const ANIMATION_CONFIG = {
    INITIAL_DURATION: 1200,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20,
    ENTER_TRANSITION_MS: 180
  };

  const clamp = (v: number, min = 0, max = 100) => Math.min(Math.max(v, min), max);
  const round = (v: number, precision = 3) => parseFloat(v.toFixed(precision));
  const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number) => 
    round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

  let enterTimer: number | null = null;
  let leaveRaf: number | null = null;

  let tiltEngine: any = null;

  function createTiltEngine() {
    if (!enableTilt) return null;

    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number) => {
      if (!shellRef || !wrapRef) return;

      const width = shellRef.clientWidth || 1;
      const height = shellRef.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`
      };

      for (const [k, v] of Object.entries(properties)) {
        wrapRef.style.setProperty(k, v);
      }
    };

    const step = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        if (!shellRef) return;
        this.setTarget(shellRef.clientWidth / 2, shellRef.clientHeight / 2);
      },
      beginInitial(durationMs: number) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }

  const getOffsets = (evt: PointerEvent | MouseEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  function handlePointerMove(event: PointerEvent | MouseEvent) {
    if (!shellRef || !tiltEngine) return;
    const { x, y } = getOffsets(event, shellRef);
    tiltEngine.setTarget(x, y);
  }

  function handlePointerEnter(event: PointerEvent | MouseEvent) {
    if (!shellRef || !tiltEngine) return;

    shellRef.classList.add('active');
    shellRef.classList.add('entering');
    if (enterTimer) window.clearTimeout(enterTimer);
    enterTimer = window.setTimeout(() => {
      shellRef?.classList.remove('entering');
    }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

    const { x, y } = getOffsets(event, shellRef);
    tiltEngine.setTarget(x, y);
  }

  function handlePointerLeave() {
    if (!shellRef || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shellRef?.classList.remove('active');
        leaveRaf = null;
      } else {
        leaveRaf = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRaf) cancelAnimationFrame(leaveRaf);
    leaveRaf = requestAnimationFrame(checkSettle);
  }

  function handleDeviceOrientation(event: DeviceOrientationEvent) {
    if (!shellRef || !tiltEngine) return;

    const { beta, gamma } = event;
    if (beta == null || gamma == null) return;

    const centerX = shellRef.clientWidth / 2;
    const centerY = shellRef.clientHeight / 2;
    const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shellRef.clientWidth);
    const y = clamp(
      centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
      0,
      shellRef.clientHeight
    );

    tiltEngine.setTarget(x, y);
  }

  function handleClick() {
    if (!enableMobileTilt || location.protocol !== 'https:') return;
    const anyMotion = (window as any).DeviceMotionEvent;
    if (anyMotion && typeof anyMotion.requestPermission === 'function') {
      anyMotion
        .requestPermission()
        .then((state: string) => {
          if (state === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
  }

  onMount(() => {
    tiltEngine = createTiltEngine();
    if (!enableTilt || !tiltEngine || !shellRef) return;

    shellRef.addEventListener('pointerenter', handlePointerEnter);
    shellRef.addEventListener('pointermove', handlePointerMove);
    shellRef.addEventListener('pointerleave', handlePointerLeave);
    shellRef.addEventListener('click', handleClick);

    const initialX = (shellRef.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);
  });

  onDestroy(() => {
    if (shellRef) {
      shellRef.removeEventListener('pointerenter', handlePointerEnter);
      shellRef.removeEventListener('pointermove', handlePointerMove);
      shellRef.removeEventListener('pointerleave', handlePointerLeave);
      shellRef.removeEventListener('click', handleClick);
    }
    window.removeEventListener('deviceorientation', handleDeviceOrientation);
    if (enterTimer) window.clearTimeout(enterTimer);
    if (leaveRaf) cancelAnimationFrame(leaveRaf);
    if (tiltEngine) tiltEngine.cancel();
  });

  $: cardStyle = [
    `--icon: ${iconUrl ? `url(${iconUrl})` : 'none'}`,
    `--grain: ${grainUrl ? `url(${grainUrl})` : 'none'}`,
    `--inner-gradient: ${innerGradient}`,
    `--behind-glow-color: ${behindGlowColor}`,
    `--behind-glow-size: ${behindGlowSize}`
  ].join(';');

  function handleContactClickInternal() {
    onContactClick?.();
  }
</script>

<div 
  bind:this={wrapRef} 
  class="pc-card-wrapper {className}" 
  style={cardStyle}
>
  {#if behindGlowEnabled}
    <div class="pc-behind"></div>
  {/if}
  <div bind:this={shellRef} class="pc-card-shell">
    <section class="pc-card">
      <div class="pc-inside">
        <div class="pc-shine"></div>
        <div class="pc-glare"></div>
        <div class="pc-content pc-avatar-content">
          <img
            class="avatar"
            src={avatarUrl}
            alt="{name || 'User'} avatar"
            loading="lazy"
            on:error={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          {#if showUserInfo}
            <div class="pc-user-info">
              <div class="pc-user-details">
                <div class="pc-mini-avatar">
                  <img
                    src={miniAvatarUrl || avatarUrl}
                    alt="{name || 'User'} mini avatar"
                    loading="lazy"
                    on:error={(e) => { 
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.opacity = '0.5';
                      target.src = avatarUrl;
                    }}
                  />
                </div>
                <div class="pc-user-text">
                  <div class="pc-handle">@{handle}</div>
                  <div class="pc-status">{status}</div>
                </div>
              </div>
              <button
                class="pc-contact-btn"
                on:click|stopPropagation={handleContactClickInternal}
                style="pointer-events: auto"
                type="button"
                aria-label="Contact {name || 'user'}"
              >
                {contactText}
              </button>
            </div>
          {/if}
        </div>
        <div class="pc-content">
          <div class="pc-details">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
