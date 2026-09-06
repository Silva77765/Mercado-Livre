const products = [
  { id: 1, name: "Smart Tv 43'' Philco Full Hd Roku Tv Hdr10 Dolby P43cra", price: 826.60, img: "https://http2.mlstatic.com/D_NQ_NP_2X_902636-MLA108489123319_032026-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_900047-MLA108489153159_032026-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_982443-MLA110296124162_052026-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_933764-MLA108486981573_032026-F.webp"], rating: 4.8, desc: "A TV 43 Philco Smart Roku Full HD P43CRA entrega uma experiência de entretenimento completa, unindo qualidade de imagem, conectividade e praticidade. Com resolução Full HD, garante imagens nítidas, cores vivas e detalhes para filmes, séries, esportes e jogos. O sistema Roku TV oferece navegação simples, rápida e intuitiva, reunindo aplicativos de streaming em uma única plataforma. Seu design moderno se adapta a diferentes ambientes.", specs: "Marca: Philco | Modelo: P43CRA | Tamanho da tela: 43 Polegadas| Resolução: Full HD (1920 x 1080) | HDR: HDR10 | Frequência: 60 Hz" },
  { id: 2, name: "Smartphone Samsung Galaxy A36 5G 128GB", price: 579.90, img: "https://http2.mlstatic.com/D_NQ_NP_2X_968548-MLA99944961199_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_706021-MLA99460852256_112025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_791627-MLA99944832727_112025-F.webp", "https://http2.mlstatic.com/D_NQ_NP_2X_892426-MLA99944832729_112025-F.webp"], rating: 4.9, desc: "Equipado com 128 GB de memória interna e 6 GB de RAM, o Galaxy A36 5G oferece amplo espaço para armazenar fotos, vídeos e aplicativos, garantindo que você tenha tudo o que precisa ao seu alcance. Sua conectividade 5G proporciona uma navegação rápida e estável, permitindo que você aproveite ao máximo suas atividades online, seja para trabalho ou entretenimento.", specs: "Compatível com redes 5G. | Tela Super AMOLED de 6.7''. | Câmera frontal de 12Mpx. | Bateria de 5 Ah. | Memória interna de 128GB." },
  { id: 3, name: "Robô aspirador Robot W90 varre aspira e passa pano 30w Wap", price: 110.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_748103-MLA99906601653_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_675963-MLA52109443628_102022-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_841777-MLA87464386351_072025-F.webp"], rating: 4.7, desc: "Sua autonomia de 1h20 de duração é perfeita para limpar todos os cantos da sua casa. Com seu sistema antiqueda, o W90 é perfeito para trabalhar sozinho, além de ser super fácil de usar, basta um clique para iniciar a limpeza.", specs: "Voltagem: 127/220V. | Aspira tapetes com perfeição. | Possui sensor de obstáculos e anti-quedas. | Usa filtros HEPA para evitar ácaros e outros alérgenos. | Sua potência é de 30 W. | Economize tempo nas tarefas domésticas de forma simples e eficaz." },
  { id: 4, name: "Alexa Caixa De Som Inteligente Comando Voz Portátil Bluetoot", price: 51.90, img: "https://http2.mlstatic.com/D_NQ_NP_2X_735807-MLB115518695981_082026-F-alaxe-caixa-de-som-inteligente-comando-voz-portatil-bluetoot.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_992132-MLB114185726396_082026-F-alaxe-caixa-de-som-inteligente-comando-voz-portatil-bluetoot.webp","https://http2.mlstatic.com/D_NQ_NP_2X_694183-MLB115517918283_082026-F-alaxe-caixa-de-som-inteligente-comando-voz-portatil-bluetoot.webp"], rating: 4.6, desc: "Caixa de Som Alexa 5W - A Escolha Ideal para Presentear Seja para aniversários, amigo secreto ou brindes corporativos, a Caixa Alaxe é um item versátil que agrada a todos os perfis. Ela combina a força de uma caixa de 5W com as facilidades de uma assistente inteligente.", specs: "Marca: Alexa | Linha: 2 | Modelo: Alexa Brasil Assistente Pessoal Preta | Cor: Preto | Voltagem: 127/220V | Com som 360 graus: Sim | Fabricante: alexa | Modelo alfanumérico: ALEXA" },
  { id: 5, name: "Ventilador de Coluna Ventisol Turbo 6 Pás 30cm Preto 8234", price: 62.78, img: "https://http2.mlstatic.com/D_NQ_NP_2X_806243-MLA99936483539_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_885831-MLA95495226104_102025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_881356-MLA115351949367_072026-F.webp"], rating: 4.8, desc: "Grade Wind-line: Tecnologia que proporciona melhor vazão e direcionamento de ar. Grade Fechada: Mais segurança para a família. Oscilação Horizontal: Proporciona um fluxo de ar mais distribuído por todo o ambiente. Regulagem de inclinação manual: Ajustada de acordo com a necessidade", specs: "Marca: Ventisol | Modelo: Turbo 6 | Referência: 8234 | Cor: Preto | Hélice: 6 Pás |Tamanho: 30 cm | Grade: 35 cm | Hélice: 33 cm | Velocidades : 03 | Ajuste de Altura: Mínima 115cm | Máxima 130cm" },
  { id: 6, name: "Ar-condicionado Lg Split Hi Wall Inverter 12.000 Btus Frio", price: 1220.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_774930-MLB111696033119_052026-F-arcondicionado-lg-split-hi-wall-inverter-12000-btus-frio.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_835201-MLB107242714970_032026-F-arcondicionado-lg-split-hi-wall-inverter-12000-btus-frio.webp","https://http2.mlstatic.com/D_NQ_NP_2X_711301-MLB107242714978_032026-F-arcondicionado-lg-split-hi-wall-inverter-12000-btus-frio.webp"], rating: 4.9, desc: "Ar Condicionado Split Hi Wall - Inverter R-32 - LG - Dual Voice + IA - 12.000 BTUs - Frio - 220V Monofásico Ar-Condicionado LG DUAL Inverter AI Voice 12.000 BTU: O Futuro da Climatização Inteligente O LG DUAL Inverter AI Voice representa o ápice da tecnologia em climatização residencial. Com capacidade de 12.000 BTU/h, este modelo combina a renomada eficiência da linha DUAL Inverter com recursos de Inteligência Artificial que aprendem com sua rotina, garantindo o equilíbrio perfeito entre conforto e economia extrema de energia.", specs: "ATENÇÃO Fique atento à CAPACIDADE do produto escolhido. Calcule a metragem do ambiente para descobrir a quantidade ideal de BTUs; Verifique se o produto desejado é INVERTER, ou ON-OFF (Convencional); Cheque se o produto escolhido é Quente/Frio ou Somente Frio; Confirme a voltagem correta do local onde o aparelho será instalado." },
  { id: 7, name: "Memória Ram 8gb Ddr4 | Rise Mode | 3200mhz | Z Series Branco", price: 150.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_783777-MLA99998168739_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_892642-MLA113886177207_062026-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_706473-MLA91983155171_092025-F.webp"], rating: 4.8, desc: "A Rise Mode Z Series White 8GB é uma memória DDR4 desenvolvida para computadores desktop, combinando capacidade de 8GB, frequência de até 3200MHz e acabamento branco para compor diferentes estilos de setup. É uma opção para montagem ou upgrade de computadores compatíveis com DDR4, atendendo tarefas do dia a dia, estudos, trabalho, jogos e uso simultâneo de aplicações.", specs: "ESPECIFICAÇÕES TÉCNICAS: Marca: Rise Mode | Linha: Z Series | Modelo / Part Number: RM-D4-8G-3200ZW | Capacidade: 8GB | Tipo de memória: DDR4 | Frequência: 3200MHz | Timings: CL19-19-19-43 | Formato: 288-Pin DIMM | Cor: Branco | Quantidade de módulos: 1" },
  { id: 8, name: "Memória Ram 8gb Ddr4 | Rise Mode | 3200mhz | Z Series Preto", price: 120.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_633374-MLA99421509816_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_930094-MLA113884554623_062026-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_976794-MLA84184856270_052025-F.webp"], rating: 4.8, desc: "A Rise Mode Z Series Black 8GB é uma memória DDR4 desenvolvida para computadores desktop, combinando capacidade de 8GB, frequência de até 3200MHz e acabamento preto para compor diferentes estilos de setup. É uma opção para montagem ou upgrade de computadores compatíveis com DDR4, atendendo tarefas do dia a dia, estudos, trabalho, jogos e uso simultâneo de aplicações.", specs: "ESPECIFICAÇÕES TÉCNICAS: Marca: Rise Mode | Linha: Z Series | Modelo / Part Number: RM-D4-8G-3200ZW | Capacidade: 8GB | Tipo de memória: DDR4 | Frequência: 3200MHz | Timings: CL19-19-19-43 | Formato: 288-Pin DIMM | Cor: Preto | Quantidade de módulos: 1" },
  { id: 9, name: "Placa De Video Zotac Geforce Rtx 5060 Ti 16gb Twin Edge Oc", price: 1699.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_682314-MLA105391620690_012026-F.webp", images:["https://http2.mlstatic.com/D_NQ_NP_2X_690521-MLA99938141651_112025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_859051-MLA91901733279_092025-F.webp"], rating: 4.9, desc: "A Nvidia é a fabricante líder de placas de vídeo; sua qualidade garante uma experiência positiva no desenvolvimento do mecanismo gráfico do seu computador. Além disso, seus processadores usam tecnologia de ponta para que você possa desfrutar de um produto rápido e durável.", specs: "Fabricante: Nvidia | Marca: Zotac | Linha: Geforce RTX | Série: RTX 5060 Ti | Modelo: ZT-B50620H-10M | Edição: OC | Modelo detalhado novo: ZT-B50620H-10M |Tamanho da memória: 16 GB | Tipo de memória gráfica: GDDR7" },
  { id: 10, name: "Placa De Vídeo Rx 7600 Gaming Oc 8g Amd Radeon Gigabyte, 8gb", price: 1500.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_952013-MLA99504935766_112025-F-placa-de-video-rx-7600-gaming-oc-8g-amd-radeon-gigabyte-8gb.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_977642-MLA99700961616_122025-F-placa-de-video-rx-7600-gaming-oc-8g-amd-radeon-gigabyte-8gb.webp","https://http2.mlstatic.com/D_NQ_NP_2X_801164-MLA99504867322_112025-F-placa-de-video-rx-7600-gaming-oc-8g-amd-radeon-gigabyte-8gb.webp"], rating: 4.7, desc: "A Placa de Vídeo RX 7600 Gaming OC 8G da AMD Radeon, fabricada pela Gigabyte, é a escolha ideal para gamers que buscam desempenho e qualidade gráfica excepcionais. Com 8 GB de memória GDDR6 e uma interface PCI-E 4.0, esta placa oferece uma experiência de jogo fluida e envolvente, suportando resoluções de até 8K.", specs: "Fabricante: AMD | Marca: Gigabyte | Linha: Gaming OC | Série: Radeon RX 7000 | Modelo: RX 7600 | Edição: OC Edition | Modelo detalhado novo: GV-R76GAMING OC-8GD | Tamanho da memória: 8 GB | Tipo de memória gráfica: GDDR6" },
  { id: 11, name: "Geladeira Brastemp Frost Free Inverse 591 Litros Branca - Br Branco", price: 2647.66, img: "https://http2.mlstatic.com/D_NQ_NP_2X_637283-MLA106185544398_022026-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_683948-MLA106810057195_022026-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_819430-MLA106810381807_022026-F.webp"], rating: 4.8, desc: "A Geladeira Brastemp Frost Free Inverse BRE85MB combina design sofisticado com capacidade de 591 Litros, sendo a solução ideal para quem busca espaço e eficiência. Graças à tecnologia Xpert Inverter, ela economiza até 34% de energia, enquanto o sistema Smart Cold e a Fresh Box garantem alimentos frescos por muito mais tempo, mantendo frutas e legumes preservados por até 15 dias.", specs: "Capacidade Total: 591 litros | Capacidade Líquida do Freezer: 191 Litros | Capacidade Líquida do Refrigerador: 400 Litros | Puxador: Embutido | Iluminação Interna do Refrigerador e Freezer: LED | Pés: Ajustáveis e com Rodízio | Filtro Desodorizador: Sim | Posição do Freezer: Em baixo | Tecnologia: Xpert Inverter | Tipo de Degelo: Frost Free" },
  { id: 12, name: "Geladeira Electrolux Frost Free 320L Duplex Branca (TF38)", price: 1349.90, img: "https://http2.mlstatic.com/D_NQ_NP_2X_707806-MLA99442565538_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_649079-MLA93182808101_092025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_691022-MLA94362699739_102025-F.webp"], rating: 4.6, desc: "A Geladeira Electrolux Frost Free 320L Duplex Branca (TF38) tem a exclusiva Gaveta HortiFruti: organizar e visualizar suas frutas e legumes nunca foi tão fácil. Esse espaço dedicado previne o desperdício e mantém seus alimentos frescos por mais tempo. O novo design é robusto e garante que esse refrigerador seja não apenas durável, mas também prático, adaptando-se perfeitamente à sua rotina e às suas necessidades de armazenamento. E, para aqueles momentos em que você precisa de resfriamento rápido, o Turbo Freezer é a solução ideal, perfeito para festas ou para quando você chega em casa com as compras e precisa refrigerar algo rapidamente.", specs: "otal de prateleiras: 8 | Material: Aço | Cor da porta: Branco | Capacidade líquida total (L): 320 L | Alarme de porta aberta: Sim | Cesta porta ovos: Sim | Compartimento congelamento rápido: Não | Compartimento extra frio: Não | Degelo automático: Sim | Pés niveladores: Sim | Prateleiras de vidro temperado: Sim | Prateleiras removíveis: Sim | Rodízios: Sim | Puxadores: Sim (Embutido) | Tipo de compressor: Fixed Speed | Iluminação no compartimento refrigerador: Sim" },
  { id: 13, name: "Sony PlayStation Gift Card (Digital)", price: 250.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_927140-MLA115156370572_082026-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_927140-MLA115156370572_082026-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_927140-MLA115156370572_082026-F.webp"], rating: 4.9, desc: "Tudo o que você quiser jogar, escolha da maior biblioteca de conteúdo PlayStation® no mundo. Adicione crédito à sua carteira digital para resgatar o que quiser na PlayStation™Store (PS3, PS4 & PS5) inclusive as novas assinaturas da PlayStation Plus.", specs: "Nome do cartão: PlayStation Store Gift Card | Região: Brazil | Tipo de cartão pré-pago: Gift card | Crédito: R$ 360 | Formato: Digital | Data de validade: 6 meses | Loja adequada: Playstation Store | Versões do console: Playstation 4, Playstation 5" },
  { id: 14, name: "Xbox Game Pass Ultimate Assinatura 3 Meses Físico", price: 140.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_611166-MLA97476614647_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_611166-MLA97476614647_112025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_611166-MLA97476614647_112025-F.webp"], rating: 4.8, desc: "Desfrute do melhor do universo Xbox com o Xbox Game Pass Ultimate Assinatura 3 Meses – Cartão Físico. Com esta assinatura de 3 meses, você tem acesso ilimitado a uma vasta biblioteca com mais de 100 jogos de alta qualidade para Xbox, PC e nuvem, incluindo lançamentos exclusivos no dia do lançamento, títulos populares e clássicos imperdíveis. Além dos jogos, o Game Pass Ultimate oferece benefícios extras, como a Live Gold (perfeita para jogar online com amigos), EA Play (acesso a jogos da Electronic Arts) e descontos exclusivos na Microsoft Store. O cartão físico garante praticidade e é perfeito para presentear alguém especial ou renovar sua assinatura de maneira rápida e segura", specs: "Nome do cartão: Xbox Game Pass Ultimate | Região: Brasil | Tipo de cartão pré-pago: Assinatura | Formato: Físico | Duração: 3 meses | Data de validade: 3 meses | Loja adequada: Xbox store" },
  { id: 15, name: "Xbox Cartão Presente R$ 200 Gift card (Digital)", price: 160.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_770877-MLA115096954866_082026-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_770877-MLA115096954866_082026-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_770877-MLA115096954866_082026-F.webp"], rating: 4.9, desc: "A disponibilidade de aplicativos depende do dispositivo e do idioma. Os recursos variam de acordo com a plataforma. Ativação necessária. A chave do produto não pode ser substituída se tiver sido alterada ou ativada, e não pode ser trocada por dinheiro. Uso não comercial. Sem data de validade.", specs: "Nome do cartão: Cartão presente Xbox | Região: Brasil | Tipo de cartão pré-pago: Gift card | Crédito: R$ 200 | Formato: Digital | Idioma: Português | Data de validade: 12 meses" },
  { id: 16, name: "Console Playstation®5 Slim Digital - Pacote Astro Bot E Gran Turismo 7 - Branco", price: 2764.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_667226-MLA96871260244_112025-F.webp", images: ["https://m.media-amazon.com/images/I/71WCygaQDAL._AC_UF1000,1000_QL80_.jpg","https://blog.br.playstation.com/tachyon/sites/4/2025/06/a3f809f0707b4100ab12cb01e3813f844fa48fa8.png"], rating: 4.8, desc: "A PlayStation 5 Slim Digital 825GB Branco é a escolha perfeita para os amantes de jogos que buscam uma experiencia imersiva e de alta performance. Com um design elegante e compacto, este console é ideal para qualquer ambiente, oferecendo conectividade Wi-Fi e suporte para jogos digitais. Inclui dois títulos incríveis: Gran Turismo 7 e Astro Bot, que garantem horas de diversao e desafios. O controle ergonomico proporciona conforto durante longas sessoes de jogo, enquanto a capacidade de 825 GB permite armazenar uma vasta biblioteca de jogos.", specs: "Marca: Sony | Linha: Playstation 5 | Modelo: PlayStation 5 | Submodelo: Slim Digital | Edição: Standard | Modelo alfanumérico: CFI-2014B01X | Cor: Branco | Inclui controles: Sim | Quantidade de controles incluídos: 1 | Capacidade: 825 GB | Conectividade de rede móvel: 4G | Com Wi-Fi: Sim | Com HDMI: Sim" },
  { id: 17, name: "Controle Sem Fio Dualsense Chroma Pearl Ps5 - Sony", price: 189.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_632122-MLA99423611764_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_956571-MLA84537450530_052025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_959178-MLA84537725808_052025-F.webp"], rating: 4.7, desc: "Controle sem fio DualSense Chroma Pearl PlayStation 5. Conheça a Coleção Chroma, uma linha de acessórios furta-cor para PlayStation 5 que brilham, cintilam e mudam de cor de acordo com a luz! Escolha entre a elegante Chroma Pearl, a vibrante Chroma Indigo ou a moderna Chroma Teal. Com um efeito furta-cor que alterna entre tons de rosa e creme de acordo com o ângulo, o controle sem fio DualSense Chroma Pearl traz um visual elegante e cheio de estilo para a sua coleção de acessórios do PlayStation 5.", specs: "Fabricante: Sony | Marca: PlayStation | Modelo: DualSense | Versão: ASTROBOT | Cor: Chroma Pearl | Com sensor de movimento: Não | Com vibração: Sim" },
  { id: 18, name: "iPhone 17 Pro Max 512GB - Laranja-cósmico - Distribuidor Autorizado", price: 5900.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_646159-MLA94808505684_102025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_848223-MLA91747409006_092025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_879603-MLA91747399790_092025-F.webp"], rating: 4.8, desc: "iPhone 17 Pro Max. O iPhone mais potente já produzido.  Tela brilhante de 6,9 polegadas¹, estrutura unibody em alumínio, chip A19 Pro, câmeras traseiras de 48 MP e a maior duração de bateria em um iPhone.  • DESIGN UNIBODY. POTÊNCIA EXCEPCIONAL.  Estrutura unibody em alumínio forjado a quente para o iPhone mais potente já produzido.  • COM A RESISTÊNCIA DO CERAMIC SHIELD. NA FRENTE E ATRÁS.  Agora, a parte de trás do iPhone 17 Pro Max é protegida com Ceramic Shield, 4x mais resistente a rachaduras². Enquanto o novo Ceramic Shield 2 deixa a tela 3x vezes mais resistente a arranhões³.  • O SISTEMA DE CÂMERA PRO DEFINITIVO  Câmeras traseiras de 48 MP e zoom de 8x com qualidade óptica, o maior em um iPhone. É como ter oito lentes profissionais no seu bolso.  • CÂMERA FRONTAL CENTER STAGE DE 18 MP.  Flexibilidade para enquadrar. Selfies em grupo mais inteligentes. Vídeo com Captura Dupla para gravação simultânea das câmeras frontal e traseira. E muito mais", specs: "Marca: Apple | Linha: iPhone 17|  Modelo: iPhone 17 Pro Max | Cor: Laranja-cósmico | Número de homologação da Anatel: 36392501993 | Mês de lançamento: Setembro | Ano de lançamento: 2025 | Modelo do processador: A19 Pro | Quantidade de núcleos do processador: 6 É Dual SIM: Sim | Quantidade de ranhuras para cartão SIM: 1 | Com eSIM: Sim | Memória interna: 512 GB | Memória RAM: 12 GB" },
  { id: 19, name: "iPhone 17 256 GB - Branco - Distribuidor Autorizado", price: 4200.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_641716-MLA94920239704_102025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_643406-MLA92147383645_092025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_783235-MLA92147403529_092025-F.webp"], rating: 4.9, desc: "iPhone 17. Mais durável. Mais adorável. Tela de 6,3 polegadas com ProMotion¹, Ceramic Shield 2, câmeras traseiras de 48 MP, câmera frontal Center Stage, chip A19 e muito mais.  • PROJETADO PARA ENCANTAR. FEITO PARA DURAR  O iPhone 17 vem em cinco cores lindas, com tela de 6,3 polegadas¹ mais brilhante e parte da frente em Ceramic Shield 2, 3x mais resistente a arranhões².  • TELA DE 6,3 POLEGADAS COM PROMOTION. MUITO MAIS BRILHANTE  Mais leveza ao navegar com ProMotion de até 120 Hz, melhor contraste em ambientes externos com 3.000 nits de pico de brilho e 33% menos reflexos.¹  • FOTOS SURPREENDENTES  Tire fotos em altíssima resolução por padrão com o avançado sistema de câmera dupla Fusion de 48 MP, zoom de 2x com qualidade óptica e câmera Fusion ultra-angular de 48 MP.", specs: "Marca: Apple | Linha: iPhone 17 | Modelo: iPhone 17 | Cor: Branco | Memória interna: 256 GB | Memória RAM: 8 GB | Com ranhura para cartão de memória: Não | Nome do sistema operacional: iOS | Versão original do sistema operacional: 26 | Modelo do processador: A19 | Quantidade de núcleos do processador: 6" },
  { id: 20, name: "Suplemento em pó Growth Supplements Whey Protein Concentrado sabor Milkshake de Chocolate 1 kg - Distribuidor Autorizado", price: 80.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_803453-MLA98778415369_112025-F.webp", images: ["https://http2.mlstatic.com/D_NQ_NP_2X_785182-MLA98304619984_112025-F.webp","https://http2.mlstatic.com/D_NQ_NP_2X_671567-MLA98398077930_112025-F.webp"], rating: 4.8, desc: "Whey Protein Concentrado 1kg Growth Supplements é um suplemento proteico desenvolvido para complementar a ingestão diária de proteínas, oferecendo proteína concentrada do soro do leite de alto valor biológico, ideal para auxiliar na recuperação muscular e no suporte ao ganho e manutenção de massa muscular. Importante: Este produto acompanha 1 scoop dosador enviado como brinde, conforme disponibilidade em estoque.", specs: "Marca: Growth Supplements | Suplemento principal: Proteína | Nome comercial: Whey Protein concentrado | Tipo de suplemento: Nutricional | Peso líquido: 1 kg | Peso da porção: 30 g | Volume da porção: 30 mL | Aminoácidos por porção: glicina 0.4g, histidina 0.4g, leucina 2.4g, metionina 0.6g, fenilalanina 0.8g, prolina 1.4g, tirosina 0.7g, cisteína 0.5g, treonina 1.7g, triptofano 0.4g, Arginina 0.6g, aspartato 2.6g, ác glutâmico 4.3g, valin 1.4g | Ingredientes: Concentrado de proteína de soro de leite, Cacau em pó, Emulsionante de lecitina de soja, Aromatizante idêntico ao natural de milkshake de chocolate, Espessante de goma xantana, Sal, Adoçante de sucralose, Acessulfame K | Valores nutricionais por porção: 2.7g Carboidratos, 22 g proteínas, 2.2g gorduras totais, 117 kcal valor energético, 83 mg sodio| Contém lactose: Sim | Formato do suplemento: Pó | Tipo de embalagem: Envelope | Quantidade de porções: 33 Sabor: Milkshake de chocolate | É livre de glúten: Sim | É vegano: Não | É apto para as pessoas lactantes: Não | É apto para as pessoas durante a gravidez: Não | É orgânico: Não | Componentes alergéneos: Derivados do leite, Derivados de soja" }
];

let cart = [];
let shippingCost = 0;

/* LÓGICA DO CARROSSEL */
let currentSlide = 0;
const totalSlides = 3;
let autoSlideInterval;

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.dot');

  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
  resetAutoSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
  resetAutoSlide();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

/* RENDERIZAÇÃO DA PÁGINA PRINCIPAL */
function renderProducts(items) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = '';
  
  items.forEach(product => {
    const installmentValue = (product.price / 10).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    grid.innerHTML += `
      <div class="product-card" style="cursor: pointer;">
        <div class="product-clickable" onclick="openProductModal(${product.id})">
          <img src="${product.img}" alt="${product.name}" class="product-img">
          <div class="product-info">
            <div class="title" style="font-size: 14px; color: #333; margin-top: 5px;">${product.name}</div>
            <div class="price">
              <span style="font-size: 20px; font-weight: bold; color: #333;">R$ ${product.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
              <span style="font-size: 13px; font-weight: bold; color: #00a650; margin-left: 4px;"><br>no Pix ou em</span>
            </div>

            <div class="installments" style="font-size: 12px; color: #333; margin-top: 3px;">
               <p style="color: #00a650;">10x de <strong>R$ ${installmentValue}</strong> sem juros</p><br><img src="../img/Smart Tv 43'' Philco Full Hd Roku Tv Hdr10 Dolby P43cra _ Parcelamento sem juros - Google Chrome 05_09_2026 19_04_21.png" style="height: 15px;">
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

/* MODAL DE PRODUTO COMPLETO */
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const titleEl = document.getElementById('detailTitle');
  const priceEl = document.getElementById('detailPrice');
  const ratingEl = document.getElementById('detailRating');
  const instEl = document.getElementById('detailInstallments');
  const mainImgEl = document.getElementById('detailImg');

  if (titleEl) titleEl.innerText = product.name;
  
  if (priceEl) {
    priceEl.parentElement.innerHTML = `
      <span style="font-size: 18px; margin-top: 4px;">R$</span>
      <span id="detailPrice" style="font-weight: 400;">${product.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
      <span style="font-size: 18px; font-weight: bold; color: #00a650; margin-left: 8px; align-self: center;">no Pix</span>
    `;
  }

  if (ratingEl) ratingEl.innerText = product.rating || '4.8';
  if (mainImgEl) mainImgEl.src = product.img;

  const installmentValue = (product.price / 10).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  if (instEl) instEl.innerHTML = `ou em 10x de <strong>R$ ${installmentValue}</strong> sem juros`;

  // Miniaturas (Thumbnails)
  const thumbContainer = document.getElementById('detailThumbnails');
  if (thumbContainer) {
    thumbContainer.innerHTML = '';
    const allImages = [product.img, ...(product.images || [])];

    allImages.forEach((imgSrc, index) => {
      const thumb = document.createElement('img');
      thumb.src = imgSrc;
      thumb.style.cssText = `
        width: 48px;
        height: 48px;
        object-fit: contain;
        border: 1px solid ${index === 0 ? '#3483fa' : '#e6e6e6'};
        border-radius: 4px;
        cursor: pointer;
        padding: 2px;
        background: #fff;
      `;

      thumb.onmouseover = thumb.onclick = () => {
        const currentMainImg = document.getElementById('detailImg');
        if (currentMainImg) currentMainImg.src = imgSrc;
        Array.from(thumbContainer.children).forEach(child => child.style.borderColor = '#e6e6e6');
        thumb.style.borderColor = '#3483fa';
      };

      thumbContainer.appendChild(thumb);
    });
  }

  // Descrição e Especificações
  const descEl = document.getElementById('detailDescription');
  const specsEl = document.getElementById('detailSpecsText');
  if (descEl) descEl.innerText = product.desc;
  if (specsEl) specsEl.innerText = product.specs;

  // Ações dos Botões
  const buyBtn = document.getElementById('detailBuyBtn');
  const buyNowBtn = document.getElementById('detailBuyNowBtn');

  if (buyBtn) {
    buyBtn.onclick = function() {
      addToCart(product.id);
      closeModal('productModal');
    };
  }

  if (buyNowBtn) {
    buyNowBtn.onclick = function() {
      addToCart(product.id);
      closeModal('productModal');
      proceedToCheckout();
    };
  }

  // Exibe o Modal
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function filterProducts() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const term = input.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  renderProducts(filtered);
}

/* GERENCIAMENTO DO CARRINHO */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
}

function updateCartCount() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    cartCountEl.innerText = totalCount;
  }
}

function changeQuantity(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  updateCartCount();
  renderCartModal();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  renderCartModal();
}

function renderCartModal() {
  const cartList = document.getElementById('mlCartList');
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div style="background: #fff; padding: 40px; text-align: center; border-radius: 6px; border: 1px solid #e6e6e6;">
        <h3 style="color: #666; font-weight: 400;">Seu carrinho está vazio</h3>
        <p style="color: #999; font-size: 14px; margin-top: 8px;">Explore nossos produtos e adicione seus favoritos!</p>
      </div>
    `;
  } else {
    cartList.innerHTML = '';
    cart.forEach(item => {
      cartList.innerHTML += `
        <div class="ml-cart-item" style="display: flex; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 15px; align-items: center;">
          <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: contain;">
          <div class="ml-cart-item-info" style="flex: 1;">
            <div class="ml-cart-item-title" style="font-size: 14px; color: #333;">${item.name}</div>
            <div class="ml-cart-item-shipping" style="color: #00a650; font-size: 12px;">Frete grátis</div>
            <div class="ml-cart-actions" style="display: flex; gap: 10px; align-items: center; margin-top: 8px;">
              <div class="ml-qty-selector" style="display: flex; border: 1px solid #ccc; border-radius: 4px; overflow: hidden;">
                <button class="ml-qty-btn" onclick="changeQuantity(${item.id}, -1)" style="padding: 2px 8px; background: #f5f5f5; border: none; cursor: pointer;">-</button>
                <span class="ml-qty-value" style="padding: 2px 10px; font-size: 14px;">${item.quantity}</span>
                <button class="ml-qty-btn" onclick="changeQuantity(${item.id}, 1)" style="padding: 2px 8px; background: #f5f5f5; border: none; cursor: pointer;">+</button>
              </div>
              <button class="ml-cart-delete-btn" onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #3483fa; cursor: pointer; font-size: 12px;">Excluir</button>
            </div>
          </div>
          <div class="ml-cart-item-price" style="font-weight: bold; font-size: 16px;">
            R$ ${(item.price * item.quantity).toLocaleString('pt-BR', {minimumFractionDigits: 2})}
          </div>
        </div>
      `;
    });
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingCost;

  const itemsCountEl = document.getElementById('cartTotalItemsCount');
  const subtotalEl = document.getElementById('subtotalVal');
  const freteEl = document.getElementById('freteVal');
  const totalEl = document.getElementById('totalVal');

  if (itemsCountEl) itemsCountEl.innerText = totalItems;
  if (subtotalEl) subtotalEl.innerText = `R$ ${subtotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
  if (freteEl) freteEl.innerText = shippingCost === 0 ? 'Grátis' : `R$ ${shippingCost.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
  if (totalEl) totalEl.innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

function openCart() {
  renderCartModal();
  const cartModal = document.getElementById('cartModal');
  if (cartModal) cartModal.style.display = 'flex';
}

/* TRANSIÇÃO E LÓGICA DO CHECKOUT SPA */
function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Adicione pelo menos um produto ao carrinho antes de continuar!");
    return;
  }

  closeModal('cartModal');
  document.getElementById('storeView').style.display = 'none';
  document.getElementById('checkoutPage').style.display = 'block';

  renderCheckoutSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToStore() {
  document.getElementById('checkoutPage').style.display = 'none';
  document.getElementById('storeView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutSummaryItems');
  if (!container) return;

  container.innerHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    container.innerHTML += `
      <div style="display: flex; gap: 10px; margin-bottom: 12px; font-size: 13px;">
        <img src="${item.img}" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px; border: 1px solid #eee;">
        <div style="flex: 1;">
          <div style="color: #333; line-height: 1.2;">${item.name}</div>
          <div style="color: #888;">Qtd: ${item.quantity}</div>
        </div>
        <div style="font-weight: bold;">R$ ${itemTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
      </div>
    `;
  });

  const total = subtotal + shippingCost;
  document.getElementById('checkoutSubtotalVal').innerText = `R$ ${subtotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
  document.getElementById('checkoutTotalVal').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;

  populateInstallments(total);
}

function populateInstallments(totalAmount) {
  const select = document.getElementById('checkoutInstallmentsSelect');
  if (!select) return;

  select.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const installmentValue = (totalAmount / i).toLocaleString('pt-BR', {minimumFractionDigits: 2});
    select.innerHTML += `<option value="${i}">${i}x de R$ ${installmentValue} sem juros</option>`;
  }
}

/* BUSCA AUTOMÁTICA DE CEP NO CHECKOUT */
async function autofillAddressByCep(cepValue) {
  const cleanCep = cepValue.replace(/\D/g, '');

  if (cleanCep.length !== 8) return;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await response.json();

    if (!data.erro) {
      document.getElementById('checkoutStreet').value = data.logradouro || '';
      document.getElementById('checkoutNeighborhood').value = data.bairro || '';
      document.getElementById('checkoutCity').value = data.localidade || '';
      document.getElementById('checkoutState').value = data.uf || '';
      document.getElementById('checkoutNumber').focus();
    } else {
      alert('CEP não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao buscar o CEP:', error);
  }
}

/* FINALIZAÇÃO DO PAGAMENTO E VALIDAÇÃO DE ENDEREÇO */
/* FINALIZAÇÃO DO PAGAMENTO E VALIDAÇÃO DE ENDEREÇO */
function processPayment() {
  const cep = document.getElementById('checkoutCep');
  const rua = document.getElementById('checkoutStreet');
  const numero = document.getElementById('checkoutNumber');

  if (!cep || !rua || !numero || !cep.value.trim() || !rua.value.trim() || !numero.value.trim()) {
    alert('Por favor, preencha os campos obrigatórios do endereço (CEP, Rua e Número).');
    return;
  }

  const selectedPayment = document.querySelector('input[name="paymentOption"]:checked');
  const paymentMethod = selectedPayment ? selectedPayment.value.toLowerCase() : 'pix';

  // Se o pagamento for via cartão de crédito
  if (paymentMethod === 'card' || paymentMethod === 'cartao') {
    alert('Dados do cartão incorretos, tente novamente.');
    return;
  }

  // Sucesso para outros métodos (ex: PIX)
  alert(`Pedido realizado com sucesso!\nForma de pagamento: ${paymentMethod.toUpperCase()}`);
  
  cart = [];
  updateCartCount();
  backToStore();
}

function togglePaymentMethod(method) {
  document.getElementById('pixDetails').style.display = method === 'pix' ? 'block' : 'none';
  document.getElementById('cardDetails').style.display = method === 'card' ? 'flex' : 'none';
}

/* MODAIS E BUSCA GERAL DE CEP */
function openCepModal() {
  document.getElementById('cepModal').style.display = 'flex';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

async function searchCep() {
  const cepInput = document.getElementById('cepInput');
  if (!cepInput) return;
  const cep = cepInput.value.replace(/\D/g, '');
  const resultDiv = document.getElementById('cepResult');

  if (cep.length !== 8) {
    resultDiv.innerHTML = '<span style="color:red;">CEP inválido. Digite 8 números.</span>';
    return;
  }

  resultDiv.innerHTML = 'Buscando...';

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      resultDiv.innerHTML = '<span style="color:red;">CEP não encontrado.</span>';
    } else {
      shippingCost = 0;
      resultDiv.innerHTML = `
        <strong>Endereço:</strong> ${data.logradouro}, ${data.bairro}<br>
        <strong>Cidade:</strong> ${data.localidade} - ${data.uf}<br>
        <strong style="color:green;">Frete estimado: R$ 0,00 (Grátis)</strong>
      `;
      document.getElementById('userCepText').innerText = `${data.logradouro}, ${data.localidade} - ${data.uf}`;
      
      const chkCep = document.getElementById('checkoutCep');
      const chkStreet = document.getElementById('checkoutStreet');
      const chkNeighborhood = document.getElementById('checkoutNeighborhood');
      const chkCity = document.getElementById('checkoutCity');
      const chkState = document.getElementById('checkoutState');

      if (chkCep) chkCep.value = data.cep;
      if (chkStreet) chkStreet.value = data.logradouro;
      if (chkNeighborhood) chkNeighborhood.value = data.bairro;
      if (chkCity) chkCity.value = data.localidade;
      if (chkState) chkState.value = data.uf;

      renderCartModal();
    }
  } catch (err) {
    resultDiv.innerHTML = '<span style="color:red;">Erro ao buscar o CEP.</span>';
  }
}

/* INICIALIZAÇÃO */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  startAutoSlide();
});