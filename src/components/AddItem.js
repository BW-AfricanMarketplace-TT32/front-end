import React from 'react'
import { axiosWithAuth } from "../auth/axiosWithAuth";

export default function AddItem(props) {
  const { formValues, setFormValues, setAddItem } = props;

  const onChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("items", formValues)
      .then(res => {
        props.setItems(props.items.push(res.data));
        setFormValues({
          item_name: "",
          item_description: "",
          item_price: 0,
          location_id: 0,
          category_id: 0
        });
        window.location.reload();
      })
      .catch(err => {
        console.log("ADD ITEM ERROR:", err);
      });
      setAddItem(false);
  };
  
  return (
    <div className='addItem'>
      <h6>Add An Item:</h6>
        <form onSubmit={onSubmit}>
          <div className="input">
            <label>
              Item Name:
              <br />
              <input
                type="text"
                name="item_name"
                onChange={onChange}
                value={formValues.item_name}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Description: <br />
              <input
                type="text"
                name="item_description"
                onChange={onChange}
                value={formValues.item_description}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Price: <br />
              <input
                type="text"
                name="item_price"
                onChange={onChange}
                value={formValues.item_price}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Location: <br />
              <select
                name="location_id"
                value={formValues.location_id}
                onChange={onChange}
              >
                <option value="">- Select an option -</option>
                <option value={1}>1 - Mombasa</option>
                <option value={2}>2 - Nairobi</option>
                <option value={3}>3 - Kisii</option>
                <option value={4}>4 - Embu</option>
              </select>
            </label>
          </div>
          <div className="input">
            <label>
              Category: <br />
              <select
                name="category_id"
                value={formValues.category_id}
                onChange={onChange}
              >
                <option value="">- Select an option -</option>
                <option value={1}>1 - Animal Products</option>
                <option value={2}>2 - Dry Goods</option>
                <option value={3}>3 - Fruits and Vegetables</option>
                <option value={4}>4 - Other</option>
              </select>
            </label>
          </div>
          <button type="submit">Add Item</button>
        </form>
    </div>
  )
}
