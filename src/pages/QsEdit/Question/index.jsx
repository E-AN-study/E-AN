import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './question.scss';

export default function Question({ className, placeholder, onChange }) {
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],
        [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
        [{ list: 'bullet' }, { list: 'ordered' }],
        [{ color: [] }],
        [{ size: ['small', false, 'large'] }],
        ['image'],
      ],
    },
  };

  return (
    <ReactQuill
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      modules={modules}
    ></ReactQuill>
  );
}
