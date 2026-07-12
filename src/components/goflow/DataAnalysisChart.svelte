<script lang="ts">
  import { onMount } from 'svelte';

  type Datum = { category: string; value: number; color: string };

  const data: Datum[] = [
    { category: 'Data Loss & Duplicates', value: 23.1, color: '#E53E3E' },
    { category: 'No Undo Mechanism', value: 21.5, color: '#E53E3E' },
    { category: 'Error Debugging Difficulty', value: 18.2, color: '#F97316' },
    { category: 'Multi-Step Workflow Complexity', value: 15.7, color: '#F97316' },
    { category: 'Test Data Issues', value: 11.8, color: '#F59E0B' },
    { category: 'Cost Concerns', value: 9.9, color: '#F59E0B' },
  ];

  let container: HTMLDivElement;

  onMount(() => {
    let chart: import('echarts').ECharts | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let disposed = false;

    const option = {
      grid: {
        top: 20,
        bottom: 20,
        left: '22%',
        right: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 25,
        interval: 5,
        axisLine: { lineStyle: { color: '#E5E7EB' } },
        axisTick: { lineStyle: { color: '#E5E7EB' } },
        splitLine: { lineStyle: { color: '#F3F4F6' } },
        axisLabel: { color: '#9CA3AF', fontSize: 12 },
      },
      yAxis: {
        type: 'category',
        data: data.map((d) => d.category),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#6B7280',
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
            itemStyle: { color: d.color, borderRadius: [0, 4, 4, 0] },
            label: {
              show: true,
              position: 'right',
              formatter: ({ value }: { value: number }) => `${value}%`,
              color: '#374151',
              fontSize: 12,
              fontWeight: 600,
            },
          })),
          barWidth: 18,
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

<div class="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white">
  <!-- Header -->
  <div class="mb-8 text-center px-2">
    <h1 class="text-lg sm:text-xl md:text-3xl text-gray-700 mb-2 leading-tight">
      Data Loss and Reversibility Are Top User Pain Points
    </h1>
    <p class="text-xs sm:text-sm md:text-base text-gray-500">
      Analysis informed design priorities: reversibility, observability, safety
    </p>
  </div>

  <!-- Chart -->
  <div class="w-full h-[400px] md:h-[450px] mb-4 flex justify-center">
    <div class="w-full max-w-4xl" bind:this={container}></div>
  </div>

  <!-- Footer Note -->
  <div class="text-center">
    <p class="text-xs md:text-sm text-gray-500">
      Note: Patterns informed design priorities: reversibility, observability, safety-first execution
    </p>
  </div>
</div>
