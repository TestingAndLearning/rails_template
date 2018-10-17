class BookTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  renderItems() {
    return this.state.books.map((book) => (
      <Book key={book.id} book={book} />
  ));
  }

  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th className='col-md-3'>Title</th>
            <th className='col-md-2'>Author</th>
            <th className='col-md-3'>Description</th>
            <th className='col-md-4'>Pages</th>
            <th className='col-md-5'>Published</th>
            <th className='col-md-6'>Actions</th>
          </tr>
        </thead>
        <tbody>{this.renderItems()}</tbody>
      </table>
      );
  }
}
