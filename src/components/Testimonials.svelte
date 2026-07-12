<script lang="ts">
  import { onMount } from 'svelte';

  const testimonials = [
    {
      impact: 'Product Strategy & UX',
      text: 'Had a great experience working with Dhruv Mishra. Found his designing skills to be updated with current market trends. He provided creative design after brainstorming the right solution for my UI/UX work.',
      author: 'Kavinder Singh',
    },
    {
      impact: 'Execution & Reliability',
      text: 'I really liked the services provided to me. It was value for money and the services were timely delivered. Looking forward to work with you again.',
      author: 'Divya Kukreja',
    },
    {
      impact: 'Full-Stack Delivery',
      text: 'A perfect place for your website development. Have the ability to create, design, Hosting, Managing sites, logo making and optimize.',
      author: 'Bhawana Rana',
    },
  ];

  let current = $state(0);

  const next = () => {
    current = (current + 1) % testimonials.length;
  };

  const prev = () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
  };

  onMount(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  });
</script>

<div class="relative w-full max-w-2xl">
  <div class="bg-white/5 border-l-4 border-cyan-500 p-8 rounded-r-2xl shadow-xl backdrop-blur-sm">
    <span class="text-xs uppercase tracking-widest text-cyan-400 mb-2 block"
      >{testimonials[current].impact}</span
    >
    <p class="text-xl mb-4 italic text-slate-200">“{testimonials[current].text}”</p>
    <p class="font-bold text-white text-right">— {testimonials[current].author}</p>
  </div>
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick={prev}
      aria-label="Previous testimonial"
      class="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
    >
      <svg viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path
          d="M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"
        />
      </svg>
    </button>
    <button
      onclick={next}
      aria-label="Next testimonial"
      class="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
    >
      <svg viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path
          d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
        />
      </svg>
    </button>
  </div>
</div>
