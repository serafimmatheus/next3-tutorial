export default function (value: number) {
  const formatacao = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return { formatacao }
}
