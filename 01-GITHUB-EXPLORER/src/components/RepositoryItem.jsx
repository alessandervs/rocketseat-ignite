

export function RepositoryItem(props){

    return(
        <li>
            {/* ?? para definir valor padrão para uma variável ou propriedade, desconsidera o '0' como inválido*/}
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>
            Acessar repositório
        </a>
    </li>
    )
}