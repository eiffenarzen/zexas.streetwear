export const createWhatsAppCheckoutUrl = (cartItems, total, phoneNumber = "6281412132242") => {
  let message = `Hello Zexas!\n\nI would like to place an order:\n\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* x${item.quantity}\n`;
    message += `   Size: ${item.size || 'L'}\n`;
    message += `   Price: $${item.price * item.quantity}\n\n`;
  });

  message += `*Total Order: $${total}*\n\n`;
  message += `Please let me know the payment details. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
