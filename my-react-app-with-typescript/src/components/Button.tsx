// La convención para definir los tipos de las props es
// el noombre del componente seguido de Props.

// Los comentarios entre /** */ antes de la prop permite que al usar el componente en otra parte
// al pasar el mouse por encima se vea esa descripcion de la prop.
// Verl este ejemplo en App.tsx con los comments y sin los comments dentro de ButtonProps

// type ButtonProps = {
//     /** Función que se dispara al hacer clic. Ideal para analytics o navegación. */
//     onclick: () => void;

//     /** El texto o número que se mostrará dentro del botón. */
//     label: string | number;
// }

type ButtonProps = {
    onclick: () => void;
    label: string | number;
}

const Button = ({ onclick, label }: ButtonProps) => {
    return <button onClick={onclick}>{label}</button>


}

export default Button;