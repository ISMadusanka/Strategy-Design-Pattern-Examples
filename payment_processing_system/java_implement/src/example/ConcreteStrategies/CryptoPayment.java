package example.ConcreteStrategies;

import example.PaymentStrategy;

public class CryptoPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using Cryptocurrency.");
    }
}
