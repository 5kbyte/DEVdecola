import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginFormData } from "@/app/schemas/loginSchema";

import { userIsMobile } from "@/app/hooks/userIsMobile";

import desktop from "./desktop.module.css";
import mobile from "./mobile.module.css";
import { Link } from "@/components/ui/link";
import { useNavigate } from "react-router-dom";

import { FcGoogle as GoogleIcon } from "react-icons/fc";

export const Login = () => {
	const isMobile = userIsMobile();

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		mode: "onChange",
	});

	const onSubmit = (data: LoginFormData) => {
		console.log("Login data:", data);
	};

	const hasErrors = Object.keys(errors).length > 0;

	const isButtonDisabled = isSubmitting || hasErrors;

	const LoginDesktop = () => (
		<div className={desktop.global__container}>
			<section className={desktop.container}>
				<div className={desktop.content__container}>
					<div className={desktop.logo__container}>LOGO | 5kbyte</div>

					<header className={desktop.header__container}>
						<h1>Preparado para continuar sua jornada?</h1>
						<h2>
							Entre com seu e-mail e senha para acessar sua conta
							DevDeCola.
						</h2>
					</header>

					<form
						className={desktop.main__container}
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className={desktop.inputs__container}>
							<Input
								label="Email"
								placeholder="example@gmail.com"
								type="text"
								iconLeft={<AtSign className={desktop.icon} />}
								{...register("email")}
								state={errors.email ? "error" : "default"}
								helperText={errors.email?.message}
								autoFocus
							/>

							<div className={desktop.password__container}>
								<Input
									label="Senha"
									placeholder="********"
									type="password"
									{...register("password")}
									state={
										errors.password ? "error" : "default"
									}
									helperText={errors.password?.message}
								/>
								<Link label="Esqueceu a senha?" href="#" />
							</div>
						</div>

						<button
							type="submit"
							disabled={isButtonDisabled}
							className={desktop.submitButton}
						>
							{isSubmitting ? "Enviando..." : "Entrar"}
							<ArrowRight size={18} />
						</button>
					</form>

					<footer className={desktop.footer__container}>
						<div className={desktop.separator__container}>
							<hr />
							<p>ou continue com</p>
							<hr />
						</div>

						<button className={mobile.googleButton}>
							<GoogleIcon size={24} /> Google
						</button>

						<p>
							Novo por aqui? <a href="#">Crie sua conta</a>
						</p>
					</footer>
				</div>

				<figure className={desktop.image__container}>
					<img src="https://github.com/DevSaLLein.png" alt="Avatar" />
				</figure>
			</section>
		</div>
	);

	const LoginMobile = () => (
		<section className={mobile.mobileWrapper}>
			<header>
				<button
					className={mobile.backButton}
					onClick={() => navigate("/")}
				>
					<ArrowLeft />
				</button>
				<h1 className={mobile.title}>
					Preparado para continuar sua jornada?
				</h1>
				<h2 className={mobile.subtitle}>
					Entre com seu e-mail e senha para acessar sua conta
					DevDeCola.
				</h2>
			</header>

			<div>
				<form className={mobile.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={mobile.inputs__container}>
						<Input
							label="Email"
							placeholder="example@gmail.com"
							type="text"
							iconLeft={<AtSign className={desktop.icon} />}
							{...register("email")}
							state={errors.email ? "error" : "default"}
							helperText={errors.email?.message}
							autoFocus
						/>

						<div className={mobile.password__container}>
							<Input
								label="Senha"
								placeholder="********"
								type="password"
								{...register("password")}
								state={errors.password ? "error" : "default"}
								helperText={errors.password?.message}
							/>
							<Link label="Esqueceu a senha?" href="#" />
						</div>
					</div>

					<button
						type="submit"
						className={mobile.submitButton}
						disabled={isButtonDisabled}
					>
						Entrar <ArrowRight size={18} />
					</button>
				</form>

				<div className={mobile.separator}>
					<hr />
					<span>ou continue com</span>
					<hr />
				</div>

				<button className={mobile.googleButton}>
					<GoogleIcon size={24} /> Google
				</button>

				<div className={mobile.signup}>
					<p>Novo por aqui? </p>
					<Link label="Cadastre-se" href="#" />
				</div>
			</div>
		</section>
	);

	return <>{isMobile ? <LoginMobile /> : <LoginDesktop />}</>;
};
