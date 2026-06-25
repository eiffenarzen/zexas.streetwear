export const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
};

export const createWhatsAppCheckoutUrl = (cartItems, total, phoneNumber = "6281412132242") => {
  let message = `Halo Zexas!\n\nSaya mau order barang berikut:\n\n`;
  
  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (x${item.quantity})\n`;
    message += `   Ukuran: ${item.size || 'L'}\n`;
    message += `   Harga: ${formatRupiah(item.price * item.quantity)}\n\n`;
  });

  message += `*Total Pesanan: ${formatRupiah(total)}*\n\n`;
  message += `Tolong info detail pembayarannya ya. Terima kasih!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
