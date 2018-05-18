// Animasi Display ke 1
$(window).scroll(function() {
if ($(this).scrollTop()>10)
 {
    $('.display1').fadeIn();
 }
else
 {
  $('.display1').fadeOut();
 }
 });

// Animasi Display ke 2
$(window).scroll(function() {
if ($(this).scrollTop()>400)
 {
    $('.display2').fadeIn();
 }
else
 {
  $('.display2').fadeOut();
 }
 });

// Animasi Display ke 3
$(window).scroll(function() {
if ($(this).scrollTop()>300)
 {
    $('.bounceInLeft').fadeIn();
 }
else
 {
  $('.bounceInLeft').fadeOut();
 }
 });

// Animasi Display ke 4
$(window).scroll(function() {
if ($(this).scrollTop()>700)
 {
    $('.bounceInRight').fadeIn();
 }
else
 {
  $('.bounceInRight').fadeOut();
 }
 });

// Animasi Display ke 5
$(window).scroll(function() {
if ($(this).scrollTop()>1100)
 {
    $('.slideInLeft').fadeIn();
 }
else
 {
  $('.slideInLeft').fadeOut();
 }
 });

// Animasi Display ke 6
$(window).scroll(function() {
if ($(this).scrollTop()>1100)
 {
    $('.slideInRight').fadeIn();
 }
else
 {
  $('.slideInRight').fadeOut();
 }
 });