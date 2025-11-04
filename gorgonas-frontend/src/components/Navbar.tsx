'use client'

// 1. IMPORTAR O useAuth
import { useAuth } from "@/app/contexts/AuthContext"; // Verifique se este caminho está correto

export function Navbar() {
  // 2. CHAMAR O HOOK E REMOVER A VARIÁVEL FALSA
  const { user, logout, isLoading } = useAuth();

  return (
    <nav className=" w-full h-23 bg-black flex items-center justify-between px-8">

      {/* --- Logo --- */}
      <a href="/">
        <div className="flex items-center">
          <img
            src="/LOGOStock.io.png"
            alt="Logo Stock.io"
            className="h-9 object-contain"
          />
        </div>
      </a>

      {/* 3. MUDAR A LÓGICA 'if/else' PARA USAR O CONTEXTO */}
      {/* Primeiro, checamos se está carregando (isLoading) */}
      {isLoading ? (
        // Não mostre nada enquanto verifica o token (evita "piscar" a UI)
        null
      ) : user ? (
        /* CASO 1: LOGADO (user existe) */
        <>
          <div className="flex items-center space-x-6">
            <a href="/carrinho">
              <div
                className="h-9 w-9 bg-contain bg-no-repeat bg-center 
                         bg-[url('/sacola.png')] 
                         hover:bg-[url('/sacola-hover.png')]
                         transition-all duration-200"
                role="img"
                aria-label="Sacola de compras"
              />
            </a>
            <a href="/loja">
              <div
                className="h-9 w-9 bg-contain bg-no-repeat bg-center 
                         bg-[url('/lojinha.png')] 
                         hover:bg-[url('/lojinha-hover.png')]
                         transition-all duration-200"
                role="img"
                aria-label="Loja"
              />
            </a>
            <a href="/perfil">
              {/* MUDANÇA: Use <img> para a foto de perfil */}
              <div
                className="h-9 w-9 bg-contain bg-no-repeat bg-center 
                             bg-[url('/avatar-placeholder.png')] 
                             hover:bg-[url('/avatar-hover.png')]
                             transition-all duration-200"
                role="img"
                aria-label="Perfil"
              />
            </a>
            {/* MUDANÇA: Mude <a> para <button> e chame a função 'logout' */}
            <button type="button" onClick={logout}>
              <div
                className="h-9 w-9 bg-contain bg-no-repeat bg-center 
                             bg-[url('/logout.png')] 
                             hover:bg-[url('/logout-hover.png')]
                             transition-all duration-200"
                role="img"
                aria-label="Sair"
              />
            </button>
          </div>
        </>

      ) : (

        /* CASO 2: DESLOGADO (user é nulo) */
        <>
          <div className="flex items-center space-x-20 px-8">
            <div className="flex items-center space-x-6">
              <a href="/carrinho">
                <div
                  className="h-9 w-9 bg-contain bg-no-repeat bg-center 
                         bg-[url('/sacola.png')] 
                         hover:bg-[url('/sacola-hover.png')]
                         transition-all duration-200"
                  role="img"
                  aria-label="Sacola de compras"
                />
              </a>
              <a href="/loja">
                <div
                  className="h-9 w-9 bg-contain bg-no-repeat bg-center 
                         bg-[url('/lojinha.png')] 
                         hover:bg-[url('/lojinha-hover.png')]
                         transition-all duration-200"
                  role="img"
                  aria-label="Loja"
                />
              </a>
            </div>
            <a
              href="/login"
              className="text-white font-medium hover:text-[#6A38F3]"
            >
              LOGIN
            </a>
            <a
              href="/cadastro"
              className="bg-[#6A38F3] text-white font-bold py-2 px-6 rounded-[15px] hover:bg-[#FFFF] hover:text-[#6A38F3]"
            >
              CADASTRE-SE
            </a>
          </div>
        </>

      )}
    </nav>
  );
}