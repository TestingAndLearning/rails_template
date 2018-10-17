class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  handleDelete(e) {
    
    if (confirm('Are you sure you want to delete book: ' + this.state.book.name+'?')) {
      var self = this;
      var bookId = this.state.book.id;
      e.preventDefault();

      $.ajax({
        method: 'DELETE',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        url: '/api/books/' + bookId,
        success: function(data) {
          location.reload();
        }.bind(this),
        error: function(xhr, status, error) {
          alert('Cannot delete requested record. ');
        }
      });
    } else {
      console.log('Cancelled delete action. ');
    }
  }


  render() {
    var bookLink = "/api/books/1=" + this.state.book.id;
      return (
          <tr>
            <td><a className="ta-white" href={bookLink}>{this.state.book.title}</a></td>
            <td>{this.state.book.author}</td>
            <td>{this.state.book.description}</td>
            <td>{this.state.book.pages}</td>
            <td>{this.state.book.published}</td>
            <td>          
            <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete.bind(this)} >
            Delete</a>
            </td>
          </tr>
      );
  }
}