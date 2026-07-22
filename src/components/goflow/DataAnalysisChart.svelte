<script lang="ts">
  import { onMount } from 'svelte';

  type Datum = { category: string; value: number; color: string };

  const data: Datum[] = [
    { category: 'Data loss / duplicates / overwrites', value: 34, color: '#dc2626' },
    { category: 'No undo / no reliable rollback', value: 27, color: '#ef4444' },
    { category: 'Hidden logs / cryptic errors', value: 18, color: '#f97316' },
    { category: 'Setup / UX friction', value: 12, color: '#94a3b8' },
    { category: 'Connector gaps', value: 6, color: '#cbd5e1' },
    { category: 'Pricing / other', value: 3, color: '#e2e8f0' },
  ];

  let container: HTMLDivElement;

  onMount(() => {
    let chart: import('echarts').ECharts | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let disposed = false;

    const option = {
      grid: {
        top: 22,
        bottom: 28,
        left: '34%',
        right: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 40,
        interval: 10,
        axisLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.3)' } },
        axisTick: { lineStyle: { color: 'rgba(148, 163, 184, 0.3)' } },
        splitLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.12)' } },
        axisLabel: { color: '#94a3b8', fontSize: 12 },
      },
      yAxis: {
        type: 'category',
        data: data.map((d) => d.category),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#cbd5e1',
          fontSize: 11,
          align: 'right',
          padding: [0, 12, 0, 0],
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        valueFormatter: (v: number) => `${v}%`,
      },
      series: [
        {
          type: 'bar',
          data: data.map((d) => ({
            value: d.value,
            itemStyle: { color: d.color, borderRadius: [0, 6, 6, 0] },
            label: {
              show: true,
              position: 'right',
              formatter: ({ value }: { value: number }) => `${value}%`,
              color: '#e2e8f0',
              fontSize: 12,
              fontWeight: 600,
            },
          })),
          barWidth: 16,
        },
      ],
    };

    import('echarts').then((echarts) => {
      if (disposed) return;
      chart = echarts.init(container);
      chart.setOption(option);
      resizeObserver = new ResizeObserver(() => chart?.resize());
      resizeObserver.observe(container);
    });

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      chart?.dispose();
    };
  });
</script>

<div class="w-full max-w-6xl mx-auto rounded-[1.75rem] surface-strong p-4 md:p-8">
  <!-- Header -->
  <div class="mb-8 text-center px-2">
    <h1 class="text-lg sm:text-xl md:text-3xl text-white mb-2 leading-tight">
      Data loss and reversibility are the top user pain points
    </h1>
    <p class="text-xs sm:text-sm md:text-base text-slate-400">
      Review mining across 200+ public reviews, tagged by risk language
    </p>
  </div>

  <!-- Chart -->
  <div class="w-full h-[400px] md:h-[450px] mb-4 flex justify-center">
    <div class="w-full max-w-4xl" bind:this={container}></div>
  </div>

  <!-- Footer Note -->
  <div class="text-center">
    <p class="text-xs md:text-sm text-slate-400">
      Risk-related complaints dominated. The design priority was not convenience alone, but safer execution and recovery.
    </p>
  </div>
</div>
