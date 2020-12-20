// King: regular concrete class product
var KingJoffery = (function() {
    function KingJoffery() {
    }

    KingJoffery.prototype.makeDecision = function () {
        // ...
    };

    KingJoffery.prototype.marry = function () {
        // ...
    };

    return KingJoffery;
})();

// HandOfTheKing: regular concrete class product
var LordTywin = (function () {
    function LordTywin() {
    }

    LordTywin.prototype.makeDecision = function () {
        // ...
    };

    return LordTywin;
})();

// concrete factory method (구체 팩토리)
var LannisterFactory = (function () {
    function LannisterFactory() {
    }

    LannisterFactory.prototype.getKing = function () {
        return new KingJoffery();
    };

    LannisterFactory.prototype.getHandOfTheKing = function () {
        return new LordTywin();
    };

    return LannisterFactory;
})();

// King: regular concrete class product
var KingAerys = (function() {
    function KingAerys() {
    }

    KingAerys.prototype.makeDecision = function () {
        // ...
    };

    KingAerys.prototype.marry = function () {
        // ...
    };

    return KingAerys;
})();

// HandOfTheKing: regular concrete class product
var LordConnington = (function () {
    function LordConnington() {
    }

    LordConnington.prototype.makeDecision = function () {
        // ...
    };

    return LordConnington;
})();

// 다른 지배 가문 concrete factory method
var TargaryenFactory = (function() {
    function TargaryenFactory() {

    }

    TargaryenFactory.prototype.getKing = function() {
        return new KingAerys();
    };

    TargaryenFactory.prototype.getHandOfTheKing = function() {
        return new LordConnington();
    };

    return TargaryenFactory;
})();

// AbstractFactoryClass: 지배 가문을 필요로 하는 클래스 (추상 팩토리)
var CourtSession = (function () {
    function CourtSession(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD= 10;
    }

    CourtSession.prototype.complaintPresented = function (complaint) {
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
            this.abstractFactory.getHandOfTheKing().makeDecision();
        } else {
            this.abstractFactory.getKing().makeDecision();
        }
    };

    return CourtSession;
})();

var courtSession = new CourtSession(new TargaryenFactory());
courtSession.complaintPresented({severity: 8});
courtSession.complaintPresented({severity: 12});

var courtSession2 = new CourtSession(new LannisterFactory());
courtSession2.complaintPresented({severity: 8});
courtSession2.complaintPresented({severity: 12});
