		var mainNav = document.querySelector('.main-head__contaner');
		var navToggle = document.querySelector('.main-head__toggle');
		var btn_1 = document.querySelector('.btn_1');
		var btn_2 = document.querySelector('.btn_2');
		var btn_3 = document.querySelector('.btn_3');
		var btn_4 = document.querySelector('.btn_4');
		var btn_5 = document.querySelector('.btn_5');
		var blockContent_1 = document.querySelector('.item-block-content__more-1');
		var blockContent_2 = document.querySelector('.item-block-content__more-2');
		var blockContent_3 = document.querySelector('.item-block-content__more-3');
		var blockContent_4 = document.querySelector('.item-block-content__more-4');
		var blockContent_5 = document.querySelector('.item-block-content__more-5');
		var itemBlock_1 = document.querySelector('.item-block-content-1');
		var itemBlock_2 = document.querySelector('.item-block-content-2');
		var itemBlock_3 = document.querySelector('.item-block-content-3');
		var itemBlock_4 = document.querySelector('.item-block-content-4');
		var itemBlock_5 = document.querySelector('.item-block-content-5');

		navToggle.addEventListener('click', function() {
			if (mainNav.classList.contains('main-head__contaner--closed')) {
				mainNav.classList.remove('main-head__contaner--closed');
				mainNav.classList.add('main-head__contaner--opened');
			} else {
				mainNav.classList.add('main-head__contaner--closed');
				mainNav.classList.remove('main-head__contaner--opened');
			}

		});

		btn_1.addEventListener('click', function() {
			if(btn_1.classList.contains('btn-active')){
			btn_1.classList.remove('btn-active');
			blockContent_1.classList.remove('item-block-content__more-active');
			itemBlock_1.classList.remove('item-block-content--active-1')
			} else {
			btn_1.classList.add('btn-active');
			blockContent_1.classList.add('item-block-content__more-active');
			itemBlock_1.classList.add('item-block-content--active-1')
			}
		});

		btn_2.addEventListener('click', function() {
			if(btn_2.classList.contains('btn-active')) {
			btn_2.classList.remove('btn-active');
			blockContent_2.classList.remove('item-block-content__more-active');
			itemBlock_2.classList.remove('item-block-content--active-2')
			} else {
			btn_2.classList.add('btn-active');
			blockContent_2.classList.add('item-block-content__more-active');
			itemBlock_2.classList.add('item-block-content--active-2')
			}
		});

		btn_3.addEventListener('click', function() {
			if(btn_3.classList.contains('btn-active')) {
			btn_3.classList.remove('btn-active');
			blockContent_3.classList.remove('item-block-content__more-active');
			itemBlock_3.classList.remove('item-block-content--active-3')
			} else {
			btn_3.classList.add('btn-active');
			blockContent_3.classList.add('item-block-content__more-active');
			itemBlock_3.classList.add('item-block-content--active-3')
			}
		});

		btn_4.addEventListener('click', function() {
			if(btn_4.classList.contains('btn-active')) {
			btn_4.classList.remove('btn-active');
			blockContent_4.classList.remove('item-block-content__more-active');
			itemBlock_4.classList.remove('item-block-content--active-4')
			} else {
			btn_4.classList.add('btn-active');
			blockContent_4.classList.add('item-block-content__more-active');
			itemBlock_4.classList.add('item-block-content--active-4')
			}
		});

		btn_5.addEventListener('click', function() {
			if(btn_5.classList.contains('btn-active')) {
			btn_5.classList.remove('btn-active');
			blockContent_5.classList.remove('item-block-content__more-active');
			itemBlock_5.classList.remove('item-block-content--active-5')
			} else {
			btn_5.classList.add('btn-active');
			blockContent_5.classList.add('item-block-content__more-active');
			itemBlock_5.classList.add('item-block-content--active-5')
			}
		});