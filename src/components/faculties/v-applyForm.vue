<template>
	<div class="v-applyForm">
		<div id="loading" v-if="$store.state.has_loading"></div>
		<div v-else>
			<div class="v-pay-header">
				<div
					style="
						display: flex;
						justify-content: space-between;
						align-items: center;
					"
				>
					<img src="../../assets/images/left-arrow.png" width="15px" />
					<p @click="$router.go(-1)">Вернуться к специальности</p>
				</div>

				<router-link to="/">
					<img
						class="v-pay-header-logo"
						src="../../assets/images/logo-eac.png"
					/>
				</router-link>
				<h4>Eng Қаз Рус</h4>
			</div>

			<h1>Подать заявку на грант</h1>

			<div class="v-applyForm-inputs">
				<div class="v-applyForm-inputs-right">
					<div class="container">
						<form @submit.prevent="submitHandler">
							<div class="group">
								<label class="selectLabel" for="facultativ"
									>Выберите специальность:</label
								>
								<select id="facultativ" v-model="selectFac">
									<option
										v-for="(facultativ, i) in faculties"
										:key="i"
										:value="facultativ.label"
									>
										{{ facultativ.label }}
									</option>
								</select>
							</div>
							<div class="group">
								<input
									type="text"
									v-model="fullName"
									:class="{
										invalid: $v.fullName.$dirty && !$v.fullName.required,
									}"
								/>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label>ФИО</label>
								<small
									class="helper-text invalid"
									v-if="$v.fullName.$dirty && !$v.fullName.required"
								>
									Поле ФИО не должно быть пустым
								</small>
							</div>
							<div class="group">
								<input
									type="text"
									v-model.trim="email"
									:class="{
										invalid:
											($v.email.$dirty && !$v.email.required) ||
											($v.email.$dirty && !$v.email.email),
									}"
								/>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label>Email</label>
								<small
									class="helper-text invalid"
									v-if="$v.email.$dirty && !$v.email.required"
								>
									Поле Email не должно быть пустым
								</small>
								<small
									class="helper-text invalid"
									v-else-if="$v.email.$dirty && !$v.email.email"
								>
									Введите корректный Email
								</small>
							</div>
							<div class="group">
								<input
									type="number"
									v-model.trim="IIN"
									:class="{
										invalid:
											($v.IIN.$dirty && !$v.IIN.required) ||
											($v.IIN.$dirty && !$v.IIN.minLength),
									}"
								/>
								<span class="highlight"></span>
								<span class="bar"></span>
								<label>ИИН</label>
								<small
									class="helper-text invalid"
									v-if="$v.IIN.$dirty && !$v.IIN.required"
								>
									Поле ИИН не должно быть пустым
								</small>
								<small
									class="helper-text invalid"
									v-else-if="$v.IIN.$dirty && !$v.IIN.minLength"
								>
									Введите корректный ИИН
								</small>
							</div>
							<div class="group">
								<div class="input_container">
									<p>Фото 3х4</p>
									<input
										@change="handleImagePhotoUpload"
										type="file"
										id="fileUpload"
									/>
								</div>
							</div>
							<div class="group">
								<div class="input_container">
									<p>Прекрепите файл Аттестата</p>
									<input
										@change="handleImageAttestatUpload"
										type="file"
										id="fileUpload"
									/>
								</div>
							</div>
							<button type="submit" @click="toast">Подать заявку</button>
							<div id="toast">
								<div id="img">
									<img src="../../assets/images/success.png" width="30px" />
								</div>
								<div id="desc">Заявка отправлена</div>
							</div>
						</form>
					</div>
				</div>

				<div class="v-applyForm-inputs-left">
					<p>
						Пожалуйста, заполните все обязательные поля, чтобы мы могли быстро
						обработать вашу заявку. Мы гарантируем конфиденциальность и
						безопасность ваших данных.
						<br /><br />
						Заполняя эту форму, вы подаете заявку на получение гранта колледжа.
						Пожалуйста, внимательно проверьте все данные перед отправкой формы,
						чтобы избежать ошибок
						<br /><br />
						Обратите внимание, что подача заявки на грант не гарантирует ее
						получение. Мы будем рассматривать все заявки в соответствии с
						установленными критериями и оповестим вас о результатах в ближайшее
						время.
						<br /><br />
						Пожалуйста, прочитайте внимательно условия получения гранта на нашем
						сайте. Если у вас возникнут какие-либо вопросы, не стесняйтесь
						связаться с нами.
						<br /><br />
						После отправки заявки на грант вы получите подтверждение на
						указанный вами адрес электронной почты. Если вы не получили
						подтверждение, пожалуйста, проверьте папку "Спам" или свяжитесь с
						нами.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { email, required, minLength } from "vuelidate/lib/validators"

export default {
	data: () => ({
		selectFac: "Не выбрано",
		email: "isanartayuly@gmail.com",
		faculties: [
			{
				label: "Не выбрано",
				valueId: 0,
			},
			{
				label: "Програмное обеспечение",
				valueId: 1,
			},
			{
				label: "Ветеринария",
				valueId: 2,
			},
			{
				label: "Агрономия",
				valueId: 3,
			},
			{
				label: "Электрооборудования",
				valueId: 4,
			},
			{
				label: "Лесное хозяйство",
				valueId: 5,
			},
			{
				label: "Учет и аудит",
				valueId: 6,
			},
			{
				label: "Логистика",
				valueId: 7,
			},
			{
				label: "Земляустройство",
				valueId: 8,
			},
			{
				label: "Охотоведение",
				valueId: 9,
			},
		],
		fullName: "Иса Нартайұлы",
		IIN: "031013500081",
		dateTime: new Date(),
	}),
	validations: {
		fullName: { required },
		email: {
			email,
			required,
		},
		IIN: { required, minLength: minLength(12) },
	},
	methods: {
		...mapActions(["SET_STUDENT_APPLY"]),
		submitHandler() {
			if (this.$v.$invalid) {
				this.$v.$touch()
				return
			}
			const student = {
				email: this.email,
				fullName: this.fullName,
				IIN: this.IIN,
				selectFac: this.selectFac,
				dateTimeNow: this.dateTime.toLocaleString(),
			}

			this.SET_STUDENT_APPLY(student)
		},
		toast() {
			let x = document.getElementById("toast")
			x.className = "show"
			if (!this.$v.$invalid) {
				setTimeout(function () {
					x.className = x.className.replace("show", "")
				}, 5000)
			}
			else{
				x.className = x.className.replace("", "show")
			}
		},

		handleImagePhotoUpload(event) {
			const file = event.target.files[0]
			const reader = new FileReader()
			reader.onload = () => {
				const image = reader.result
				this.$store.dispatch("SAVE_IMAGE_PHOTO", image)
			}
			reader.readAsDataURL(file)
		},
		handleImageAttestatUpload(event) {
			const file = event.target.files[0]
			const reader = new FileReader()
			reader.onload = () => {
				const image = reader.result
				this.$store.dispatch("SAVE_IMAGE_ATTESTAT", image)
			}
			reader.readAsDataURL(file)
		},
	},
	computed: {
		...mapGetters(["STUDENT_APPLY"]),
	},
}
</script>

<style scoped>
.v-pay-header {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 20px 0;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.v-pay-header p {
	margin: 0 0 0 5px;
	font-weight: 600;
	cursor: pointer;
}

.v-pay-header-logo {
	width: 90px;
	height: 100px;
	margin: 0 40px 0 0;
}

.v-pay-header h4 {
	margin: 0 20px 0 0;
	font-weight: 600;
}

/* ddddddddddddddddd */

.v-applyForm-inputs {
	width: 100%;
	height: 1000px;
	display: flex;
	justify-content: space-between;
}
.v-applyForm h1 {
	margin: 100px 0 100px 170px;
}

.v-applyForm-inputs-left {
	border-radius: 10px;
	width: 600px;
	height: 670px;
	margin: 0 170px 0 0;
	padding: 40px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.v-applyForm-inputs-left p {
	font-size: 18px;
}
.container {
	width: 100%;
	text-align: center;
	display: flex;
	padding: 0 0 0 170px;
}

* {
	box-sizing: border-box;
}

/* form starting stylings ------------------------------- */
.group {
	position: relative;
	margin-bottom: 3em;
	/* border: 1px solid red; */
}
input {
	font-size: 18px;
	padding: 0.625em 0.625em 0.625em 0.3125em;
	display: block;
	width: 18.75em;
	border: none;
	border-bottom: 1px solid #757575;
	background-color: transparent;
}
input:focus {
	outline: none;
}

.group select {
	margin: 0 0 0 -40px;
	padding: 15px;
	font-size: large;
}

.selectLabel {
	color: #00b123;
	margin: -40px 0 0 0;
}

/* LABEL ======================================= */
label {
	font-family: "Arial";
	color: #999;
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 0.3125em;
	top: 0.625em;
	transition: 0.2s ease all;
	-moz-transition: 0.2s ease all;
	-webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
	top: -20px;
	left: -2px;
	font-size: 14px;
	color: #00b123;
}

/* BOTTOM BARS ================================= */
.bar {
	position: relative;
	display: block;
}

.bar:before,
.bar:after {
	content: "";
	height: 2px;
	width: 0;
	bottom: 1px;
	position: absolute;
	background: #00b123;
	transition: 0.2s ease all;
	-moz-transition: 0.2s ease all;
	-webkit-transition: 0.2s ease all;
}
.bar:before {
	left: 50%;
}
.bar:after {
	right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
	width: 50%;
}

.container button {
	padding: 15px 20px;
	background-color: #00b123;
	text-decoration: none;
	border-radius: 10px;
	color: #fff;
	font-weight: 600;
	border: 1px solid #fff;
	transition: 0.3s;
	font-size: 16px;
}

.container button:hover {
	transition: 0.3s;
	color: #fff;
	background: #007918;
}
/* FILE */

.input_container {
	border: 1px solid #9c9c9c;
}
.input_container p {
	font-size: 16px;
	text-align: left;
	margin: 0 0 0 10px;
	padding: 10px 0 0 0;
}

input[type="file"]::file-selector-button {
	background-color: #00b123;
	color: #fff;
	border: 0px;
	padding: 10px 15px;
	margin-right: 20px;
	transition: 0.5s;
	font-size: 15px;
}

input[type="file"]::file-selector-button:hover {
	background-color: #006715;
	border: 0px;
	border-right: 1px solid #e5e5e5;
}

/* TOAST */

#toast {
	visibility: hidden;
	max-width: 50px;
	height: 50px;
	/* margin-left: -125px; */
	margin: auto;
	background-color: #333;
	color: #fff;
	text-align: center;
	border-radius: 2px;
	position: fixed;
	z-index: 1;
	left: 0;
	right: 0;
	bottom: 30px;
	font-size: 17px;
	white-space: nowrap;
}
#toast #img {
	width: 50px;
	height: 50px;

	float: left;

	padding-top: 16px;
	padding-bottom: 16px;

	box-sizing: border-box;

	background-color: #111;
	color: #fff;
}

#toast img {
	margin: -5px 0 0 0;
}
#toast #desc {
	color: #fff;

	padding: 16px;

	overflow: hidden;
	white-space: nowrap;
}

#toast.show {
	visibility: visible;
	-webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
		fadeout 0.5s 2.5s;
	animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
		fadeout 0.5s 4.5s;
}

@-webkit-keyframes fadein {
	from {
		bottom: 0;
		opacity: 0;
	}
	to {
		bottom: 30px;
		opacity: 1;
	}
}

@keyframes fadein {
	from {
		bottom: 0;
		opacity: 0;
	}
	to {
		bottom: 30px;
		opacity: 1;
	}
}

@-webkit-keyframes expand {
	from {
		min-width: 50px;
	}
	to {
		min-width: 350px;
	}
}

@keyframes expand {
	from {
		min-width: 50px;
	}
	to {
		min-width: 350px;
	}
}
@-webkit-keyframes stay {
	from {
		min-width: 350px;
	}
	to {
		min-width: 350px;
	}
}

@keyframes stay {
	from {
		min-width: 350px;
	}
	to {
		min-width: 350px;
	}
}
@-webkit-keyframes shrink {
	from {
		min-width: 350px;
	}
	to {
		min-width: 50px;
	}
}

@keyframes shrink {
	from {
		min-width: 350px;
	}
	to {
		min-width: 50px;
	}
}

@-webkit-keyframes fadeout {
	from {
		bottom: 30px;
		opacity: 1;
	}
	to {
		bottom: 60px;
		opacity: 0;
	}
}

@keyframes fadeout {
	from {
		bottom: 30px;
		opacity: 1;
	}
	to {
		bottom: 60px;
		opacity: 0;
	}
}
</style>
