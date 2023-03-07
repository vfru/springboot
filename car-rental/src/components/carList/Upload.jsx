import React, { useRef, useState } from 'react';


function FileUploadBase64(props) {
  const fileCtrl = useRef(null);
  const [img, setImg] = useState('');
  const changeHandle = () => {
    // FileReader读文件，可以转为base64
    const reader = new FileReader(); //
    reader.readAsDataURL(fileCtrl.current.files[0]); // 把选择的文件作为参数
    reader.onload = () => {
      // console.log(reader.result);
      // axios.post('img', {
      //     img: reader.result,
      //   })
      setImg(reader.result)
      props.getbase64(reader.result)
    };
  };
  return (
    <div>
      上传新的汽车图片
      <input type='file' ref={fileCtrl} onChange={changeHandle} />
      {img === "" ? <></> : <img
        src={img}
        style={{ maxWidth: '100px', maxHeight: '100px' }}
        alt='暂无图片'
      />}
    </div>
  );
}

export default FileUploadBase64;