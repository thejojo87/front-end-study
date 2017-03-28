/**
 * Created by thejojo on 2017/3/20.
 */

function Card(name,address,work,home) {
    this.name = name;
    this.address = address;
    this.work = work;
    this.home = home;
    this.PrintCard = PrintCard;
}

// 新建一个方法：
function PrintCard() {
    line1 = "Name:" + this.name + "<br>\n";
    line2 = "Address:" + this.address + "<br>\n";
    line3 = "Work Phone:" + this.work + "<br>\n";
    line4 = "Home Phone:" + this.home + "<br>\n";
    document.write(line1,line2,line3,line4);
}

// 使用
holmes = new Card();
holmes.name = "Sharlock Holmes";
holmes.address = "baker street"
holmes.work = "18923789";
holmes.home = "324";

holmes.PrintCard();