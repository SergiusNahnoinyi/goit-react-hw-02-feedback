import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section className="feedback">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
