import { formatPrice } from "./helpers";
import { Link } from 'react-router-dom';

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void
    redirectUri: boolean
}

function OrderSummary({ amount, totalPrice, onSubmit, redirectUri }: Props){
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">
                            {formatPrice(totalPrice)}
                        </strong>
                        VALOR TOTAL
                    </span>
                </div>
                {redirectUri ? (
                    <Link 
                        to="/"
                        className="order-summary-make-order"
                        onClick={onSubmit}
                    >
                        FAZER PEDIDO
                    </Link>
                ):(
                    <button 
                        className="order-summary-make-order"
                        onClick={onSubmit}
                    >
                        FAZER PEDIDO
                    </button>
                )}
            </div>
        </div>
    )
}

export default OrderSummary;