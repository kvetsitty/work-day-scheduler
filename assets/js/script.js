var currentHour = moment().format('H')

for (let i = 9; i <= 17; i++) {
    var textBlock = $('#' + i)
    if (currentHour < i) {
        textBlock.addClass('future')
    } else if (currentHour === i) {
        textBlock.addClass('present')
    } else if (currentHour > i) {
        textBlock.addClass('past')
    }
    textBlock.val(localStorage.getItem(i))

}

$('.saveBtn').on("click", function() {
    var timeRow = $(this).siblings("textarea").attr('id')
    var activity = $(this).siblings("textarea").val()
    localStorage.setItem(timeRow, activity)
})
