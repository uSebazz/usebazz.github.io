export default function ReferralButton({
  color = '#0c360fff',
  ref = 'https://torbox.app/subscription?referral=74c57ae2-94eb-48fd-9812-856332b87169',
  label = 'Support me',
  size = 'w-10 h-10',
  radius = '12px',
}) {
  return (
    <div className="flex  justify-start">
      <div class="btn-container">
        <a
          title={label}
          className={`${label ? 'tb-button ' : `rounded-full ${size ? size : 'w-10 h-10'} block flex justify-center`} rounded-full`}
          style={{ backgroundColor: color, borderRadius: radius }}
          href={ref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="tbtext">
            <img
              src="https://torbox.app/logo.svg "
              class="tbimg"
              alt="Torbox referral"
            />
            {label ? label : null}
          </span>
        </a>
      </div>
    </div>
  );
}
