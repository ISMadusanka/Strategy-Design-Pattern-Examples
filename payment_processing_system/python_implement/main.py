from abc import ABC, abstractmethod

# Payment Strategy Interface
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

# Concrete Payment Strategies
class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid ${amount} using Credit Card.")

class CryptoPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid ${amount} using Cryptocurrency.")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid ${amount} using PayPal.")

# Add more payment strategies here...


# Payment Context
class PaymentContext:
    def __init__(self, strategy: PaymentStrategy):
        self._strategy = strategy

    def set_strategy(self, strategy: PaymentStrategy):
        self._strategy = strategy

    def execute_payment(self, amount):
        self._strategy.pay(amount)


# Usage Example
if __name__ == "__main__":
    context = PaymentContext(CreditCardPayment())
    context.execute_payment(100.0)

    context.set_strategy(PayPalPayment())
    context.execute_payment(250.0)

    context.set_strategy(CryptoPayment())
    context.execute_payment(450.0)
