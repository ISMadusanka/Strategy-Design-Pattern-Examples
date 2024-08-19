package example;


import example.ConcreteStrategies.CreditCardPayment;
import example.ConcreteStrategies.CryptoPayment;
import example.ConcreteStrategies.PayPalPayment;

// Main.java
public class Main {
    public static void main(String[] args) {
        // Initial strategy is Credit Card payment
        PaymentContext context = new PaymentContext(new CreditCardPayment());
        context.executePayment(100.0);

        // Change strategy to PayPal payment
        context.setStrategy(new PayPalPayment());
        context.executePayment(250.0);

        // Change strategy to Cryptocurrency payment
        context.setStrategy(new CryptoPayment());
        context.executePayment(450.0);
    }
}
