import Link from "next/link";

export default function Produtos({params} : {params:{id: string}}) {

    return (
        <>
        <h1>Produtos</h1>
       <p>Dados do produto {params.id}</p>
            <Link href={"/listaprodutos"}>Home</Link>
            </>
    );
}