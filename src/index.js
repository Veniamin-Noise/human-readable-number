module.exports = function toReadable(number) {
    let result = ""

    numbers = [['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'], ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']]

    if (99 < number && number < 1000) {
        result = result + numbers[0][number.toString().slice(-3, -2)] + ' hundred'
    }

    if (19 < number.toString().slice(-2) && number.toString().slice(-2) < 100 && number.toString().slice(-2) != 0) {
        if (99 < number && number < 1000) result = result + ' ' + numbers[1][number.toString().slice(-2, -1) - 2]
        else result = result + numbers[1][number.toString().slice(-2, -1) - 2]
        if (number.toString().slice(-1) != 0) result = result + ' ' + numbers[0][number.toString().slice(-1)]
    }

    if (number.toString().slice(-2) < 20 && number.toString().slice(-2) != 0) {
        if (number < 20) result = numbers[0][parseInt(number.toString().slice(-2))]
        else result = result + ' ' + numbers[0][parseInt(number.toString().slice(-2))]
    }

    if (number == 0) return 'zero'

    return result
}
