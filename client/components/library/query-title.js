
const QueryTitle = ({ title, tem }) => (
    <h4 className="mt-4 mb-0 d-block">
        Results for <u className="text-capitalize">{title}</u> articles
        <style jsx>{` h4{ font-size: 1.25rem}`}</style>
    </h4>
);

export default QueryTitle;