<template>
  <div class="payment-button">
    <button @click="checkout">Subscribe Now</button>
  </div>
</template>

<script>
export default {
  name: 'PaymentButton',
  props: {
    plan: {
      type: String,
      required: true,
    },
  },
  methods: {
    async checkout() {
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ plan: this.plan }),
        });

        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        }
      } catch (error) {
        console.error('Payment Error:', error);
        alert('Something went wrong with payment. Try again.');
      }
    },
  },
};
</script>

<style scoped>
.payment-button {
  display: flex;
  justify-content: center;
}
button {
  padding: 12px 24px;
  background: #00c853;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease;
}
button:hover {
  background: #009624;
}
</style>
