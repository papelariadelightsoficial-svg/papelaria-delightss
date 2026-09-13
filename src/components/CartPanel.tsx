import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { WHATSAPP_NUMBER } from '@/config/store';

export default function CartPanel() {
  const { items, isCartOpen, closeCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, subtotal, totalItems } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    let message = '🛍️ *Pedido - Papelaria Delights*\n\n';
    items.forEach((item, idx) => {
      const itemSubtotal = item.price * item.quantity;
      message += `*${idx + 1}. ${item.name}*\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço: ${formatPrice(item.price)}\n`;
      message += `   Subtotal: ${formatPrice(itemSubtotal)}\n\n`;
    });
    message += `*Total do pedido: ${formatPrice(subtotal)}*\n\n`;
    message += 'Obrigado pela preferência! 💖';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <>
      {isCartOpen && (<div className="fixed inset-0 bg-brown/40 backdrop-blur-sm z-50 animate-fade-in" onClick={closeCart} />)}
      <div className={`fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-cream z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-cream-dark bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-red" />
            <h2 className="font-display text-lg font-bold text-brown">Carrinho</h2>
            {totalItems > 0 && (<span className="bg-red text-white text-xs font-bold px-2 py-0.5 rounded-full">{totalItems}</span>)}
          </div>
          <button onClick={closeCart} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream-dark transition-colors text-brown" aria-label="Fechar carrinho"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto custom-scroll px-4 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <div className="w-20 h-20 rounded-full bg-cream-dark flex items-center justify-center mb-4"><ShoppingCart className="w-10 h-10 text-brown-light" /></div>
              <p className="text-brown font-medium mb-1">Seu carrinho está vazio</p>
              <p className="text-sm text-brown/50 mb-5">Adicione produtos para aparecerem aqui.</p>
              <button onClick={closeCart} className="bg-red hover:bg-red-dark text-white font-medium px-5 py-2.5 rounded-xl transition-colors">Ver produtos</button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-3 flex gap-3 card-shadow animate-slide-up">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-brown text-sm leading-snug mb-1 truncate">{item.name}</h3>
                    <p className="text-red font-bold text-sm mb-2">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-cream rounded-lg p-1">
                        <button onClick={() => decreaseQuantity(item.id)} className="w-7 h-7 flex items-center justify-center rounded-md bg-white hover:bg-cream-dark transition-colors text-brown" aria-label="Diminuir quantidade"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-7 text-center text-sm font-semibold text-brown">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="w-7 h-7 flex items-center justify-center rounded-md bg-white hover:bg-cream-dark transition-colors text-brown" aria-label="Aumentar quantidade"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <span className="text-sm font-semibold text-brown">{formatPrice(item.price * item.quantity)}</span>
                      <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red/10 text-brown-light hover:text-red transition-colors" aria-label="Remover produto"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={clearCart} className="w-full text-center text-sm text-brown/50 hover:text-red transition-colors py-2">Limpar carrinho</button>
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-cream-dark bg-white px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm text-brown/70"><span>Subtotal</span><span className="font-medium">{formatPrice(subtotal)}</span></div>
            <div className="flex items-center justify-between text-sm text-brown/70"><span>Itens</span><span className="font-medium">{totalItems}</span></div>
            <div className="flex items-center justify-between pt-2 border-t border-cream-dark"><span className="font-display text-lg font-bold text-brown">Total</span><span className="font-display text-xl font-bold text-red">{formatPrice(subtotal)}</span></div>
            <button onClick={handleCheckout} className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg active:scale-[0.98]"><MessageCircle className="w-5 h-5" />FINALIZAR PEDIDO</button>
            <p className="text-xs text-brown/40 text-center">O pedido será enviado pelo WhatsApp da loja.</p>
          </div>
        )}
      </div>
    </>
  );
}
