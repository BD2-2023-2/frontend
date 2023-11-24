import { Button, Chip, Modal, ModalBody, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from "@nextui-org/react"
import { TProduto } from "../../types"
import { EyeIcon, EditIcon, DeleteIcon } from "lucide-react"
import React from "react"

const columns = [
  { name: "NOME", uid: "nome" },
  { name: "QUANTIDADE", uid: "quantidade" },
  { name: "VALOR", uid: "valor" },
  {name: "ACTIONS", uid: "actions"},
]

export type MainTableProps = {
  produtos?: TProduto[]
}

export const MainTable = ({ produtos }: MainTableProps) => {
  const renderCell = React.useCallback((produto: TProduto, columnKey: React.Key) => {
    const cellValue = produto[columnKey as keyof TProduto];

    switch (columnKey) {
      case "nome":
        return (
          <User
            avatarProps={{radius: "lg", src: produto.fotoUrl}}
            description={produto.descricao}
            name={cellValue}
          >
            {produto.descricao}
          </User>
        );
      case "quantidade":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">{produto.quantidadeEstoque}</p>
          </div>
        );
      case "valor":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">{produto.valorUnitario}</p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon onClick={() => openModal(produto)} />
              </span>
            </Tooltip>
            <Tooltip content="Editar produto">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Deletar produto">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const openModal = (produto: TProduto) => {
    return <Modal>
      <ModalBody>
        {produto.descricao}
      </ModalBody>
    </Modal>
  }

  return <Table aria-label="Tabela de Produtos" isStriped >
    <TableHeader columns={columns}>
      {
        (column) => (
          <TableColumn key={column.uid} align={column.uid === "quantidade" ? "center": "start"} >
            {column.name}
          </TableColumn>
        )
      }
    </TableHeader>
    <TableBody items={produtos} >
      {
        (produto) => (
          <TableRow key={produto.id}>
            {(columnKey) => <TableCell>{renderCell(produto, columnKey)}</TableCell>}
          </TableRow>
        )
      }
    </TableBody>
  </Table>
}