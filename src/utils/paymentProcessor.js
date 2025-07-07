export async function processPayment(plan) {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
    return data;
  } catch (error) {
    console.error('Payment Error:', error);
    throw error;
  }
}
