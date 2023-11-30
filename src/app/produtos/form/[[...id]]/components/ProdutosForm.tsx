import { TForm, TProduto } from "@/types"
import { Button, Input } from "@nextui-org/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { ProdutoFormSchema } from "@/lib/validations/ProdutosForm"
import { number, z } from "zod"

export const ProdutosForm = ({
  id,
  data,
  isFetching,
  isPending,
  onSubmit,
  onEdit,
}: TForm<TProduto>) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof ProdutoFormSchema>>({
    resolver: zodResolver(ProdutoFormSchema)
  })

  useEffect(() => reset(data), [data])

  return <form
    className="mt-10 px-10 flex flex-col justify-center items-center gap-10 w-full"
    onSubmit={handleSubmit(onSubmit)}
  >
    <div className="flex gap-5">
      <div className="w-60 h-40 relative">
        <Image
          src={id && data?.fotoUrl ? data?.fotoUrl : ''}
          alt="imagem produto"
          fill
          style={{ objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4">
          <Input
            isReadOnly
            isDisabled
            label="Código"
            variant="faded"
            color="danger"
            readOnly
            value={data && data.id ? data?.id.toString() : ''}
            size="lg"
          />
          <Input
            isDisabled={isFetching}
            label="Descrição"
            variant="faded"
            color="danger"
            value={data?.descricao}
            onChange={(e) => onEdit(e, 'descricao')}
            size="lg"
            isRequired
          />
          <Input
            isDisabled={isFetching}
            label="Quantidade em Estoque"
            variant="faded"
            color="danger"
            type="number"
            classNames={{
              inputWrapper: ''
            }}
            value={data?.quantidade ? data.quantidade.toString() : ''}
            onChange={(e) => onEdit(e, 'quantidade')}
            size="lg"
            isRequired
          />
        </div>
        <div className="flex gap-4">
          <Input
            isDisabled={isFetching}
            label="Url da Imagem"
            variant="faded"
            color="danger"
            value={data?.fotoUrl}
            onChange={(e) => onEdit(e, 'fotoUrl')}
            size="lg"
            isRequired
          />
          <Input
            isDisabled={isFetching}
            label="Valor Unitário"
            variant="faded"
            color="danger"
            classNames={{
              inputWrapper: ''
            }}
            value={data?.valor ? data.valor.toString() : ''}
            onChange={(e) => onEdit(e, 'valor')}
            prefix="R$ "
            size="lg"
            isRequired
          />
          <Input
            isDisabled={isFetching}
            label="Código do Fornecedor"
            variant="faded"
            color="danger"
            classNames={{
              inputWrapper: ''
            }}
            value={data && data.idFornecedor ? data?.idFornecedor.toString() : ''}
            onChange={(e) => onEdit(e, 'idFornecedor')}
            size="lg"
            isRequired
          />
        </div>
      </div>
      
    </div>
    <div className="flex justify-end">
      <Button
        type="submit"
        color="danger"
        radius="none"
        onClick={() => onSubmit(data!)}
        isLoading={isFetching}
      >
        Salvar
      </Button>
    </div>
  </form>
}