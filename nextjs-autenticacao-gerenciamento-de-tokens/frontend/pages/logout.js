import React from 'react';
import { useRouter } from 'next/router';
import { HttpClient } from '../src/infra/HttpClient/HttpClient';
import { tokenService } from '../src/services/auth/tokenService'

export default function LogoutPage() {
  const router = useRouter();
  
  React.useEffect(async () => {
    try {
      await HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/refresh`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      });
      tokenService.delete();
      router.push('/');
    } catch(err) {
      console.log(err)
    }
  }, []);

  return (
    <div>
      Você será redirecionado em instantes...
    </div>
  )
}
