import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#020617',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fbbf24',
          borderRadius: '20%',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
        }}
      >
        V
      </div>
    ),
    { ...size }
  )
}
