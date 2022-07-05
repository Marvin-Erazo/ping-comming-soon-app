import 'boxicons'

function Social(){
  return(
    <div className="grid grid-cols-3 gap-2 mb-5">
      <a href="http://facebook.com"><box-icon name='facebook-circle' color="#3b5998" type='logo'></box-icon></a>
      <a href="http://facebook.com"><box-icon name='twitter' type='logo' color='#00acee' ></box-icon></a>
      <a href="http://facebook.com"><box-icon name='instagram-alt' type='logo' color='#C13584' ></box-icon></a>
    </div>
  )
}

export default Social