$(function() {
    const genderBtns = $('.calc-gender');
    const weightInp = $('.calc-weight');
    const heightInp = $('.calc-height');
    const ageInp = $('.calc-age');

    $(genderBtns).bind("click", function () {
        for (let gender of genderBtns) {
            $(gender).removeClass('active-g');
            $(gender).removeClass('empty');
        }
        $(this).addClass('active-g');
    });

    $(weightInp).bind("click", function () {
        $(this).removeClass('empty');
    });

    $(heightInp).bind("click", function () {
        $(this).removeClass('empty');
    });
    
    $(ageInp).bind("click", function () {
        $(this).removeClass('empty');
    });

    const calcBtn = $('.calc-button');

    $.each( calcBtn, function () {

        $(this).bind("click", function () {

            var gender = $('.active-g').text();
            var weight = weightInp.val();
            var height = heightInp.val();
            var age = ageInp.val();
            var sport = $('.calc-select').val();
            var calculation = 0;

            if (!gender) {
                $('.calc-gender').addClass('empty');
            }
            if (!weight) {
                $('.calc-weight').addClass('empty');
            }
            if (!height) {
                $('.calc-height').addClass('empty');
            }
            if (!age) {
                $('.calc-age').addClass('empty');
            }


            if ((weight && height && age) != '' && gender) {
                if (gender == 'Мужчина') {
                    calculation = (10 * +weight) + (6.25 * +height) - (5 * +age) + 5;
                } else if (gender == 'Женщина') {
                    calculation = (10 * +weight) + (6.25 * +height) - (5 * +age) - 161;
                } 

                if (sport == '0') {
                    calculation = calculation * 1.2;
                } else if (sport == '1-3') {
                    calculation = calculation * 1.375;
                } else if (sport == '3-5') {
                    calculation = calculation * 1.55;
                } else if (sport == '6-7') {
                    calculation = calculation * 1.725;
                } else if (sport == 'everyday') {
                    calculation = calculation * 1.9;
                }
                calculation = Math.round(calculation);
                $('.calc-result').text(calculation + ' ККАЛ');
            }
        });

    });
});