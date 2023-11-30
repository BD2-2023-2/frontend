import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from "@nextui-org/react"
import { TProduto } from "@/types"
import { EditIcon, Trash } from "lucide-react"
import React from "react"

const columns = [
  { name: "NOME", uid: "nome" },
  { name: "QUANTIDADE", uid: "quantidade" },
  { name: "VALOR", uid: "valor" },
  { name: "AÇÕES", uid: "ações" },
]

export type TabelaProdutosProps = {
  produtos?: TProduto[]
  isLoading: boolean
  errorMessage: string
  loadingMessage?: string
  handleRouting: (id?: number) => void
  onDelete: (id: number) => void
}

export const TabelaProdutos = ({ produtos, isLoading, loadingMessage, errorMessage, handleRouting, onDelete }: TabelaProdutosProps) => {
  const renderCell = React.useCallback((produto: TProduto, columnKey: React.Key) => {
    const cellValue = produto[columnKey as keyof TProduto];

    switch (columnKey) {
      case "nome":
        return (
          <User
            avatarProps={{radius: "lg", src: produto.fotoUrl ?? ''}}
            description={produto.descricao}
            name={cellValue}
          >
            {produto.descricao}
          </User>
        );
      case "quantidade":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">{produto.quantidade}</p>
          </div>
        );
      case "valor":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">{produto.valor}</p>
          </div>
        );
      case "ações":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Editar produto">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon onClick={() => handleRouting(produto.id)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Deletar produto">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <Trash onClick={() => onDelete(produto.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return <Table
    classNames={{
      wrapper: 'h-[25rem]',
    }}
    aria-label="Tabela de Produtos"
    isCompact={false}
    // isStriped
    color="primary"
    radius="lg"
  >
    <TableHeader columns={columns} >
      {
        (column) => (
          <TableColumn key={column.uid} align={column.uid === "quantidade" ? "center": "start"} >
            {column.name}
          </TableColumn>
        )
      }
    </TableHeader>
    <TableBody
      items={produtos ?? []}
      isLoading={isLoading}
      emptyContent={errorMessage}
      loadingContent={<Spinner label={loadingMessage ?? 'Carregando...'} color="primary" />}
    >
      {
        (produto) => (
          <TableRow key={produto.id} >
            {(columnKey) => <TableCell>{renderCell(produto, columnKey)}</TableCell>}
          </TableRow>
        )
      }
    </TableBody>
  </Table>
}