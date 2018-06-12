import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
    <header>
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
				<div className="navbar-header">
					<a href="index.html" id="brand" className="navbar-brand">AutoParts</a>
				</div>
				<div>
					<ul className="nav navbar-nav">
						<li className="active"><a href="index.html">Главная</a></li>
						<li><a href="katalog.html">Каталог</a></li>
						<li><a href="about.html">О нас</a></li>
						<li><a href="kontakty.php">Обратная связь</a></li>
					</ul>
				</div>
				<div id="reg_auth">
					<a href="" data-toggle="modal" data-target="#modal_auth" title="Войти в кабинет пользователя">
						<div className="btn">
							Войти
						</div>
					</a>
					<a href="" title="Зарегистрироваться">
						<div className="btn">
							Регистрация
						</div>
					</a>
				</div>
			</div>
		</nav>
	</header>
    );
  }
}

