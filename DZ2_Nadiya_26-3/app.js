var Starbucks = {
    drinks: {
        coffee: {
            latte: "Латте готовится из эспрессо и вспененного молока.",
            americano: "Американо готовят из эспрессо и горячей воды.",
            cappuccino: "Капучино готовится из эспрессо, вспененного молока и молочной пены."
        },
        tea: {
            green: "чай, подвергнутый минимальной ферментации. И зелёный, и чёрный чай получают из листьев одного и того же чайного куста, однако различными способами",
            black: "вид чая, подвергающийся полной ферментации (окислению) в течение от двух недель до месяца",
            red: "напиток, получаемый варкой, завариванием и/или настаиванием листа чайного куста, который предварительно подготавливается специальным образом."
        }
    }
}


var order = prompt("Выберите напиток coffee (latte, americano, cappuccino). Выберите напиток tea (green, black, chai)")
if (order in Starbucks.drinks.coffee || order in Starbucks.drinks.tea){
    console.log(" Ваш заказ принят, c вас 15$")
} else {
    console.log("Такого продукта нет в меню.")
}
