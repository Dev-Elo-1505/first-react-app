interface Props {
    onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select className="form-select" onChange={(event)=> onSelectCategory(event.target.value)}>
      <option value="">All categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};
