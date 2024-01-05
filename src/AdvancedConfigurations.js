import { useState, React } from 'react';

function AdvancedConfigurations() {
  const initialState = {
    maxMessageCount: '',
    absoluteMaxBytes: '',
    prefferedMaxBytes: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <label>
          Max Message Count
          <span className='asterik'>*</span>
          <input
            type='text'
            name='maxMessageCount'
            value={formData.maxMessageCount}
            placeholder='E.g. 10'
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Absolute Max Bytes
          <input
            type='text'
            name='absoluteMaxBytes'
            value={formData.absoluteMaxBytes}
            placeholder='E.g. 1038723'
            onChange={handleChange}
          />
        </label>
        <label>
          Preferred Max Bytes
          <span className='asterik'>*</span>
          <input
            type='text'
            name='prefferedMaxBytes'
            value={formData.prefferedMaxBytes}
            placeholder='E.g. 524288'
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default AdvancedConfigurations;
