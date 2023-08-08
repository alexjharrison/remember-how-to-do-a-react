type Props = {
    isTrue: boolean
}

function TodoList(props: Props) {
    return <div>{props.isTrue}</div>
}

export default TodoList