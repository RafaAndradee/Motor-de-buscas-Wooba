jQuery(function ($) {
$('.nav-tab ul li a').click(function (event) {
      var Rel = $(this).attr('rel');

      if (Rel != 'link') {
          event.preventDefault();
          $(this).parent().addClass("current");
          $(this).parent().siblings().removeClass("current");
          var tab = $(this).attr("href");
          $(".tabs").not(tab).css("display", "none");
          $(tab).fadeIn();
      }
  });

$('.change_one').change(function () {
      var bedroom = $(this).val();
      var div = $('.result_change');
      var u = bedroom;

      $('.j_view').remove();
      for (i = 1; i <= bedroom; i++) {
          u--;
          var num = u + 1;
          div.prepend("<div class='j_view'><label class=\"box box33\"><small class=\"small-title\">1º Quarto</small><select name=\"AdultoQuartos[]\"><option value=\"1\">1 Adulto(s)</option><option value=\"2\">2 Adulto(s)</option><option value=\"3\">3 Adulto(s)</option><option value=\"4\">4 Adulto(s)</option><option value=\"5\">5 Adulto(s)</option></select></label><label class=\"box box33\"><small class=\"small-title\">Crianças</small><select name=\"criancaQuartos[]\"><option value=\"0\">0 Criança(s)</option><option value=\"1\">1 Criança(s)</option><option value=\"2\">2 Criança(s)</option><option value=\"3\">3 Criança(s)</option><option value=\"4\">4 Criança(s)</option><option value=\"5\">5 Criança(s)</option></select></label></div>");
      }
  });

$('.change_type').change(function () {
      var type = $(this).val();
      var div = $('.result_type');

      $('.j_type').remove();
      if (type == 1) {
          div.html("<div class='j_type'><label class=\"box box50\"><input type=\"text\" name=\"DataIda\" placeholder=\"Data de Ida\" class=\"datepicker\"></label></div>");
      } else {
          div.html("<div class='j_type'><label class=\"box box50\"><input type=\"text\" name=\"DataIda\" placeholder=\"Data de Ida\" class=\"datepicker\"></label><label class=\"box box50\"><input type=\"text\" name=\"DataVolta\" placeholder=\"Data de Volta\" class=\"datepicker\"></label></div>");
      }

      $(".datepicker").datepicker({
          dateFormat: 'dd/mm/yy',
          //minDate: 0,
          showAnim: 'show',
          language: 'pt-BR',
          //beforeShowDay: $.datepicker.noWeekends,
          nextText: 'Seguinte',
          prevText: 'Anterior',
          monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
          dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
          dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
      });
  });

$(".datepicker").datepicker({
          dateFormat: 'dd/mm/yy',
          //minDate: 0,
          showAnim: 'show',
          language: 'pt-BR',
          //beforeShowDay: $.datepicker.noWeekends,
          nextText: 'Seguinte',
          prevText: 'Anterior',
          monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
          dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
          dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
      });
});
