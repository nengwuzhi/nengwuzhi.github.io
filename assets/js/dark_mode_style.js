//- To see the process of how I made this dark mode toggle, watch this tutorial video:
//- https://youtu.be/42gltu11wb8

// Dark Mode Setup

var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // 如果存储模式为暗模式，使用该值设置变量
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // 如果没有存储暗模式，将变量设置为“亮”
  darkMode = 'light';  
}

//设置新的本地存储值
localStorage.setItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
  // 如果上述内容为“深色”，则将.dark应用于身体
  $('body').addClass('dark');  
  // 隐藏“dark”按钮
  $('.dark-button').hide();
  // 显示“light”按钮
  $('.light-button').show();
}

// Toggle dark UI切换黑暗的用户界面

$('.dark-button').on('click', function() {  
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');  
  // set stored value to 'dark'
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {  
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  // set stored value to 'light'
  localStorage.setItem('dark-mode', 'light');   
});

//--------------------------------------------------
// 以下是基本切换所需的全部
//--------------------------------------------------

// $('.dark-button').on('click', function() {  
//   $('.dark-button').hide();
//   $('.light-button').show();
//   $('body').addClass('dark');
// });

// $('.light-button').on('click', function() {  
//   $('.light-button').hide();
//   $('.dark-button').show();
//   $('body').removeClass('dark');  
// });
