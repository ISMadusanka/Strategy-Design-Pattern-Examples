// Stategy class
class PaymentStrategy {
    pay(amount) {
        throw new Error("Method 'pay()' must be implemented.");
    }
}


// ### Concrete Strategy Classes ########################################################
// CreditCardPayment
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

// CryptoPayment
class CryptoPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using Cryptocurrency.`);
    }
}

// PayPalPayment
class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using PayPal.`);
    }
}
//add more payment methods here...

//#################################################################################


// Context class that uses a strategy
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executePayment(amount) {
        this.strategy.pay(amount);
    }
}

// Usage Example
const context = new PaymentContext(new CreditCardPayment());
context.executePayment(100.0);

// Changing the strategy to PayPal
context.setStrategy(new PayPalPayment());
context.executePayment(250.0);

// Changing the strategy to Crypto
context.setStrategy(new CryptoPayment());
context.executePayment(450.0);
