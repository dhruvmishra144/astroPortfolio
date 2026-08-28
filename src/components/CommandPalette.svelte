<script lang="ts">
  /**
   * CommandPalette.svelte — the "Ask Dhruv ⌘K" command palette (dark).
   *
   * Opens on ⌘K / Ctrl+K or any [data-command-open] element (the SiteNav Ask
   * button, the "step inside my mind" Enter link, etc.). Fuzzy-filter, arrow
   * nav, Enter to run, Esc to close. A non-matching query becomes an "ask" line
   * (placeholder — wire to a real endpoint later). Matches the navy/cyan theme.
   */
  import { onMount, tick } from 'svelte';

  type Command = { id: string; label: string; hint: string; group: string; run: () => void };

  const go = (href: string) => () => (window.location.href = href);
  const ext = (href: string) => () => window.open(href, '_blank', 'noopener');

  const commands: Command[] = [
    { id: 'home', label: 'Home', hint: 'WORK', group: 'Navigate', run: go('/') },
    { id: 'about', label: 'About — Outside the terminal', hint: 'LIFE', group: 'Navigate', run: go('/about-me') },
    { id: 'contact', label: 'Start a conversation', hint: 'CONTACT', group: 'Navigate', run: go('/contact') },
    { id: 'resume', label: 'Open résumé', hint: 'CV', group: 'Navigate', run: go('/resume') },
    { id: 'work', label: 'Selected work', hint: 'HOME', group: 'Navigate', run: go('/#work') },
    {
      id: 'lacasa',
      label: 'LaCasa Retreats',
      hint: 'CASE',
      group: 'Projects',
      run: go('/projects/LaCasaRetreats'),
    },
    { id: 'goflow', label: 'GoFlow', hint: 'CASE', group: 'Projects', run: go('/projects/GoFlow') },
    { id: 'aonflow', label: 'Aonflow', hint: 'CASE', group: 'Projects', run: go('/projects/aonflow') },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      hint: 'EXT',
      group: 'Connect',
      run: ext('https://www.linkedin.com/in/dhruvmishra144/'),
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      hint: 'EXT',
      group: 'Connect',
      run: ext('https://api.whatsapp.com/send?phone=918376848843'),
    },
  ];

  let open = $state(false);
  let query = $state('');
  let active = $state(0);
  let inputEl = $state<HTMLInputElement | null>(null);

  const fuzzy = (needle: string, hay: string) => {
    const n = needle.toLowerCase().replace(/\s/g, '');
    if (!n) return true;
    let i = 0;
    for (const ch of hay.toLowerCase()) if (ch === n[i]) i++;
    return i === n.length;
  };

  const filtered = $derived(commands.filter((c) => fuzzy(query, c.label + ' ' + c.hint)));
  const asking = $derived(query.trim().length > 1 && filtered.length === 0);
  const groups = $derived(
    Array.from(new Set(filtered.map((c) => c.group))).map((g) => ({
      name: g,
      items: filtered.filter((c) => c.group === g),
    })),
  );
  const indexOf = (c: Command) => filtered.indexOf(c);

  async function show() {
    open = true;
    query = '';
    active = 0;
    await tick();
    inputEl?.focus();
  }
  function hide() {
    open = false;
  }
  function runActive() {
    if (asking) {
      console.info('[ask]', query);
      hide();
      return;
    }
    const cmd = filtered[active];
    if (cmd) {
      hide();
      cmd.run();
    }
  }
  function onKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open ? hide() : show();
      return;
    }
    if (!open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      hide();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      active = Math.min(active + 1, Math.max(filtered.length - 1, 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      active = Math.max(active - 1, 0);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runActive();
    }
  }

  $effect(() => {
    void query;
    active = 0;
  });

  onMount(() => {
    window.addEventListener('keydown', onKeydown);
    const openers = Array.from(document.querySelectorAll<HTMLElement>('[data-command-open]'));
    const openHandler = (e: Event) => {
      e.preventDefault();
      show();
    };
    openers.forEach((el) => el.addEventListener('click', openHandler));
    return () => {
      window.removeEventListener('keydown', onKeydown);
      openers.forEach((el) => el.removeEventListener('click', openHandler));
    };
  });
</script>

{#if open}
  <div
    class="cmdk-backdrop"
    role="presentation"
    onclick={(e) => e.target === e.currentTarget && hide()}
  >
    <div class="cmdk-panel" role="dialog" aria-modal="true" aria-label="Ask Dhruv command palette">
      <div class="cmdk-input">
        <span class="cmdk-prompt">{asking ? '?' : '⌘'}</span>
        <!-- svelte-ignore a11y_autofocus -->
        <input
          bind:this={inputEl}
          bind:value={query}
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search, jump to a page, or ask a question…"
        />
        <button class="cmdk-esc" onclick={hide}>ESC</button>
      </div>

      <div class="cmdk-list">
        {#if asking}
          <button class="cmdk-ask" onclick={runActive}>
            <span>Ask Dhruv: <em>“{query}”</em></span>
            <span class="cmdk-kbd">↵</span>
          </button>
        {:else}
          {#each groups as group (group.name)}
            <p class="cmdk-group">{group.name}</p>
            {#each group.items as cmd (cmd.id)}
              {@const i = indexOf(cmd)}
              <button
                class:active={i === active}
                class="cmdk-item"
                onmouseenter={() => (active = i)}
                onclick={() => {
                  hide();
                  cmd.run();
                }}
              >
                <span class="cmdk-dot">{i === active ? '▸' : ''}</span>
                <span class="cmdk-label">{cmd.label}</span>
                <span class="cmdk-hint">{cmd.hint}</span>
              </button>
            {/each}
          {/each}
        {/if}
      </div>

      <div class="cmdk-footer">
        <span>↑↓ navigate · ↵ open · esc close</span>
        <span>{filtered.length} result{filtered.length === 1 ? '' : 's'}</span>
      </div>
    </div>
  </div>
{/if}

<style>
  .cmdk-backdrop {
    position: fixed;
    inset: 0;
    z-index: 80;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 12vh 1rem 1rem;
    background: rgba(2, 6, 16, 0.66);
    backdrop-filter: blur(8px);
  }
  .cmdk-panel {
    width: 100%;
    max-width: 40rem;
    background: rgba(10, 18, 33, 0.9);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 1.15rem;
    box-shadow: 0 40px 120px rgba(2, 8, 23, 0.6);
    overflow: hidden;
    animation: cmdk-in 180ms ease;
  }
  @keyframes cmdk-in {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.99);
    }
  }
  .cmdk-input {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.95rem 1.1rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.16);
  }
  .cmdk-prompt {
    color: #4dd7ff;
    font-weight: 700;
  }
  .cmdk-input input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: none;
    color: #e6eef8;
    font-size: 0.95rem;
  }
  .cmdk-input input::placeholder {
    color: rgb(100 116 139);
  }
  .cmdk-esc {
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    color: rgb(148 163 184);
    border: 1px solid rgba(148, 163, 184, 0.28);
    border-radius: 6px;
    padding: 0.15rem 0.4rem;
    cursor: pointer;
  }
  .cmdk-list {
    max-height: 46vh;
    overflow-y: auto;
    padding: 0.5rem;
  }
  .cmdk-group {
    padding: 0.6rem 0.75rem 0.35rem;
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgb(103 232 249);
  }
  .cmdk-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 0.75rem;
    border-radius: 0.7rem;
    text-align: left;
    color: #e6eef8;
    cursor: pointer;
    transition: background-color 120ms ease;
  }
  .cmdk-item.active {
    background: rgba(77, 215, 255, 0.1);
  }
  .cmdk-dot {
    width: 1rem;
    color: #4dd7ff;
    font-size: 0.75rem;
  }
  .cmdk-label {
    flex: 1;
    font-size: 0.9rem;
  }
  .cmdk-hint {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    color: rgb(148 163 184);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 5px;
    padding: 0.12rem 0.4rem;
  }
  .cmdk-ask {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 0.75rem;
    border-radius: 0.7rem;
    color: #e6eef8;
    cursor: pointer;
  }
  .cmdk-ask:hover {
    background: rgba(77, 215, 255, 0.08);
  }
  .cmdk-ask em {
    color: #4dd7ff;
    font-style: normal;
  }
  .cmdk-kbd {
    font-family: ui-monospace, monospace;
    color: rgb(148 163 184);
  }
  .cmdk-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1.1rem;
    border-top: 1px solid rgba(148, 163, 184, 0.16);
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    color: rgb(100 116 139);
  }
</style>
