class Coffee {
    prepare() {
    }

    make() {
    }

    boxing() {
    }
}

// 구체 제품 (Concrete Product)
class Latte extends Coffee {
}

// 구체 제품 (Concrete Product)
class Espresso extends Coffee {
}

// 구체 제품 (Concrete Product)
class Cappuccino extends Coffee {
}

// 구체 제품 (Concrete Product)
class Mocha extends Coffee {
}

function takeOutCoffee(type) {
    let coffee;
    if (type === 'latte') coffee = new Latte();
    else if (type === 'espresso') coffee = new Espresso();
    else if (type === 'cappuccino') coffee = new Cappuccino();

    coffee.prepare();
    coffee.make();
    coffee.boxing();

    return coffee;
}

/**
 * 현재 세가지 종류의 커피만 존재.
 * 이후 새로운 커피를 추가하고자 할때 문제 발생.
 * 예를 들어 Mocha 커피가 추가된다고 가정함.
 * 이때 새로운 분기가 추가되어야함.
 *
 * 하지만 만약, Mocha 한가지 아니라 많은 수의 커피가 추가 되어야 하면?
 * 분기가 많아질 뿐만아니라 이후 유지보수에도 치명적임.
 *
 * 현재의 상황의 경우 추상 팩토리 패턴을 적용하면 문제점을 해결할 수 있음.
 * */

// 추상 팩토리 (Abstract Factory) -> 팩토리를 전달받아 인스턴스를 만드는 행위를 추상화
class CoffeeFactory {
    static createCoffee(factory) {
        return factory.createCoffee();
    }
}

// 구체 팩토리(Concrete Factory)
class LatteFactory {
    static createCoffee() {
        return new Latte();
    }
}

// 구체 팩토리(Concrete Factory)
class EspressoFactory {
    static createCoffee() {
        return new Espresso();
    }
}

// 구체 팩토리(Concrete Factory)
class CappuccinoFactory {
    static createCoffee() {
        return new Cappuccino();
    }
}

// 구체 팩토리(Concrete Factory)
class MochaFactory {
    static createCoffee() {
        return new Mocha();
    }
}

function takeOutCoffee2(factory) {
    let coffee = CoffeeFactory.createCoffee(factory);
    coffee.prepare();
    coffee.make();
    coffee.boxing();
    return coffee;
}

takeOutCoffee2(new LatteFactory());
takeOutCoffee2(new EspressoFactory());
takeOutCoffee2(new CappuccinoFactory());
takeOutCoffee2(new MochaFactory());
